import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CartService } from 'src/cart/cart.service';
import { CartItemModel } from 'src/cart/entities/cart-item.model';
import { OrderModel } from './entities/order.model';
import { OrderService } from './order.service';

@Resolver(() => OrderModel)
export class OrderResolver {
  constructor(
    private readonly orderService: OrderService,
    private readonly cartService: CartService,
  ) {}

  @Query(() => [OrderModel])
  getOrders(@Args('userId', { type: () => String }) userId: string) {
    return this.orderService.getOrders(userId);
  }

  @ResolveField(() => [CartItemModel])
  cart(@Parent() order: OrderModel) {
    const { id } = order;
    return this.cartService.getCartItemsByOrderId(id);
  }
}
