import { Injectable } from '@nestjs/common';
import { CartService } from 'src/cart/cart.service';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderInput } from './dto/create-order.input';
import { CreateOrderResponse } from './dto/create-order.response';
import { OrderModel } from './entities/order.model';

@Injectable()
export class OrderService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cartService: CartService,
  ) {}

  async createOrder(
    createOrderInput: CreateOrderInput,
    userId: string,
  ): Promise<CreateOrderResponse> {
    const order = await this.prisma.order.create({
      data: {
        totalAmount: createOrderInput.totalAmount,
        userId,
      },
    });

    const cartItems = await this.cartService.getCartItems(userId);

    cartItems.forEach(async (cartItem) => {
      await this.cartService.orderedCartItems(cartItem.id, order.id);
    });

    return {
      message: 'ok',
    };
  }

  async getOrders(userId: string): Promise<OrderModel[]> {
    return await this.prisma.order.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
