import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProductsService } from 'src/products/products.service';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';

@Module({
  providers: [
    CategoryResolver,
    PrismaService,
    CategoryService,
    ProductsService,
  ],
})
export class CategoryModule {}
