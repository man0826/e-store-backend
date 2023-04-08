import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async getProducts(): Promise<Product[]> {
    return await this.prisma.product.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  async findProductById(productId: number): Promise<Product> {
    return await this.prisma.product.findFirst({
      where: {
        id: productId,
      },
    });
  }

  async findProductBySlug(slug: string): Promise<Product> {
    return await this.prisma.product.findFirst({
      where: {
        slug,
      },
    });
  }

  async findCategoryProducts(categoryId: number): Promise<Product[]> {
    return await this.prisma.product.findMany({
      where: {
        categories: {
          some: {
            id: categoryId,
          },
        },
      },
    });
  }

  async search(name: string): Promise<Product[]> {
    return await this.prisma.product.findMany({
      where: {
        name: {
          contains: name.toString(),
          mode: 'insensitive',
        },
      },
    });
  }
}
