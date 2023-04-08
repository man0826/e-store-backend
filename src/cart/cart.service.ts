import { Injectable } from '@nestjs/common';
import { CartStatus, Product } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CartInput } from './dto/cart.input';
import { CartItem } from '@prisma/client';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class CartService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productsService: ProductsService,
  ) {}

  async getCartItems(userId: string): Promise<CartItem[]> {
    return await this.prisma.cartItem.findMany({
      where: {
        userId,
        status: CartStatus.PENDING,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async addCart(cartInput: CartInput, userId: string): Promise<CartItem> {
    const { quantity, size, color, productId } = cartInput;

    const { price } = await this.productsService.findProductById(productId);

    const cartItem = await this.prisma.cartItem.findFirst({
      where: {
        userId,
        productId,
        size,
        color,
        status: CartStatus.PENDING,
      },
    });

    if (cartItem) {
      return await this.prisma.cartItem.update({
        where: {
          id: cartItem.id,
        },
        data: {
          quantity: { increment: quantity },
          totalAmount: { increment: quantity * price },
        },
      });
    }

    return await this.prisma.cartItem.create({
      data: {
        quantity,
        productId,
        userId,
        size,
        color,
        totalAmount: quantity * price,
      },
    });
  }

  async deleteCartItem(cartId: string): Promise<CartItem> {
    return await this.prisma.cartItem.delete({
      where: {
        id: cartId,
      },
    });
  }

  async incrementCartItem(cartId: string): Promise<CartItem> {
    const { price } = await this.getCartProduct(cartId);

    return await this.prisma.cartItem.update({
      where: {
        id: cartId,
      },
      data: {
        quantity: { increment: 1 },
        totalAmount: { increment: price },
      },
    });
  }

  async decrementCartItem(cartId: string): Promise<CartItem> {
    const { price } = await this.getCartProduct(cartId);

    return await this.prisma.cartItem.update({
      where: {
        id: cartId,
      },
      data: {
        quantity: { decrement: 1 },
        totalAmount: { decrement: price },
      },
    });
  }

  async orderedCartItems(cartId: string, orderId: string): Promise<CartItem> {
    return await this.prisma.cartItem.update({
      where: {
        id: cartId,
      },
      data: {
        orderId,
        status: CartStatus.PAID,
      },
    });
  }

  async getCartItemsByOrderId(orderId: string): Promise<CartItem[]> {
    return await this.prisma.cartItem.findMany({
      where: {
        orderId,
      },
    });
  }

  private async getCartProduct(cartId: string): Promise<Product> {
    const cartItem = await this.prisma.cartItem.findFirst({
      where: {
        id: cartId,
      },
    });

    return await this.productsService.findProductById(cartItem.productId);
  }
}
