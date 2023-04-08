import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'src/prisma.service';
import { CartService } from 'src/cart/cart.service';
import { ProductsService } from 'src/products/products.service';

@Module({
  providers: [
    UsersResolver,
    UsersService,
    PrismaService,
    CartService,
    ProductsService,
  ],
  exports: [UsersService],
})
export class UsersModule {}
