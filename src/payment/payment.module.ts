import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentResolver } from './payment.resolver';
import { ProductsService } from 'src/products/products.service';
import { CartService } from 'src/cart/cart.service';
import { PrismaService } from 'src/prisma.service';
import { PaymentController } from './payment.controller';
import { OrderService } from 'src/order/order.service';

@Module({
  providers: [
    PaymentService,
    PaymentResolver,
    ProductsService,
    CartService,
    PrismaService,
    OrderService,
  ],
  controllers: [PaymentController],
})
export class PaymentModule {}
