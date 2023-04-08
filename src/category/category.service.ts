import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async getCategories(): Promise<Category[]> {
    return await this.prisma.category.findMany();
  }

  // async findCategoryById(id: number): Promise<Category> {
  //   return await this.prisma.category.findFirst({
  //     where: {
  //       id,
  //     },
  //   });
  // }

  async findCategoryBySlug(slug: string): Promise<Category> {
    return await this.prisma.category.findFirst({
      where: {
        slug,
      },
    });
  }

  async findProductCategory(productId: number): Promise<Category[]> {
    return await this.prisma.category.findMany({
      where: {
        products: {
          some: {
            id: productId,
          },
        },
      },
      orderBy: {
        id: 'asc',
      },
    });
  }
}
