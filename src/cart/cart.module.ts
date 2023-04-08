import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartResolver } from './cart.resolver';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';
import { ProductsService } from 'src/products/products.service';

@Module({
  providers: [
    CartService,
    CartResolver,
    PrismaService,
    UsersService,
    ProductsService,
  ],
  exports: [CartService],
})
export class CartModule {}
