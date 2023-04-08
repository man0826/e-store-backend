import { Injectable, RawBodyRequest } from '@nestjs/common';
import { CartItem } from '@prisma/client';
import { CartService } from 'src/cart/cart.service';
import { ProductsService } from 'src/products/products.service';
import { InjectStripe } from 'nestjs-stripe';
import Stripe from 'stripe';
import { Request, Response } from 'express';
import { OrderService } from 'src/order/order.service';
import { ConfigService } from '@nestjs/config';
import { CreateSessionResponse } from './dto/create-session.response';
import { CheckoutSessionResponse } from './dto/checkout-session.response';

@Injectable()
export class PaymentService {
  constructor(
    @InjectStripe() private readonly stripe: Stripe,
    private readonly productsService: ProductsService,
    private readonly cartService: CartService,
    private readonly orderService: OrderService,
    private readonly configService: ConfigService,
  ) {}

  async createCheckoutSession(userId: string): Promise<CreateSessionResponse> {
    const cartItems = await this.cartService.getCartItems(userId);
    const paymentItems = await this.createPaymentItems(cartItems);

    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: paymentItems,
      metadata: { userId },
      success_url: `${this.configService.get<string>(
        'CLIENT_URL',
      )}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${this.configService.get<string>('CLIENT_URL')}/cart`,
    });

    return {
      url: session.url,
    };
  }

  private async createPaymentItems(items: CartItem[]) {
    const paymentItems = await Promise.all(
      items.map(async (item) => {
        const product = await this.productsService.findProductById(
          item.productId,
        );
        return {
          price_data: {
            currency: 'jpy',
            product_data: {
              name: product.name,
            },
            unit_amount: product.price,
          },
          quantity: item.quantity,
        };
      }),
    );
    return paymentItems;
  }

  async webhook(req: RawBodyRequest<Request>, res: Response) {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
      event = this.stripe.webhooks.constructEvent(
        req.rawBody,
        sig,
        this.configService.get<string>('STRIPE_WEBHOOK_SECRET'),
      );
    } catch (err) {
      res.status(400).send(`Error: ${err}`);
    }

    if (
      event.type === 'checkout.session.completed' ||
      'checkout.session.async_payment_succeeded'
    ) {
      const session = event.data.object;
      const {
        amount_total,
        metadata: { userId },
      } = await this.stripe.checkout.sessions.retrieve(session.id);
      this.orderService.createOrder({ totalAmount: amount_total }, userId);
    }

    return res.status(200);
  }

  async getOrderStatusFromStripe(id: string): Promise<CheckoutSessionResponse> {
    const session = await this.stripe.checkout.sessions
      .retrieve(id)
      .catch((err) => {
        throw new Error('error:' + err.message);
      });
    return {
      status: session.payment_status,
    };
  }
}
