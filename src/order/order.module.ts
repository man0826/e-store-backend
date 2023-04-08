import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { PrismaService } from 'src/prisma.service';
import { CartService } from 'src/cart/cart.service';
import { ProductsService } from 'src/products/products.service';

@Module({
  providers: [
    OrderService,
    OrderResolver,
    PrismaService,
    CartService,
    ProductsService,
  ],
})
export class OrderModule {}
