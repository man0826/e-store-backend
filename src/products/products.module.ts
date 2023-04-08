import { Module } from '@nestjs/common';
import { CategoryService } from 'src/category/category.service';
import { PrismaService } from 'src/prisma.service';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  providers: [
    ProductsResolver,
    PrismaService,
    ProductsService,
    CategoryService,
  ],
  exports: [ProductsService],
})
export class ProductsModule {}
