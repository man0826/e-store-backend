import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CartService } from './cart.service';
import { CartInput } from './dto/cart.input';
import { CartItemModel } from './entities/cart-item.model';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gards/auth.guard';
import { User } from '@prisma/client';
import { UserModel } from 'src/users/entities/user.model';
import { UsersService } from 'src/users/users.service';
import { ProductModel } from 'src/products/entities/product.model';
import { ProductsService } from 'src/products/products.service';

@Resolver(() => CartItemModel)
export class CartResolver {
  constructor(
    private readonly cartService: CartService,
    private readonly usersService: UsersService,
    private readonly productsService: ProductsService,
  ) {}

  @Query(() => [CartItemModel], { name: 'cartItems' })
  @UseGuards(GqlAuthGuard)
  getCartItems(@CurrentUser() user: User) {
    return this.cartService.getCartItems(user.id);
  }

  @Mutation(() => CartItemModel)
  @UseGuards(GqlAuthGuard)
  addCart(@Args('cartInput') cartInput: CartInput, @CurrentUser() user: User) {
    const { id } = user;
    return this.cartService.addCart(cartInput, id);
  }

  @Mutation(() => CartItemModel)
  deleteCartItem(@Args('cartId') id: string) {
    return this.cartService.deleteCartItem(id);
  }

  @Mutation(() => CartItemModel)
  incrementCartItem(@Args('cartId') id: string) {
    return this.cartService.incrementCartItem(id);
  }

  @Mutation(() => CartItemModel)
  decrementCartItem(@Args('cartId') id: string) {
    return this.cartService.decrementCartItem(id);
  }

  @ResolveField(() => UserModel)
  user(@Parent() cart: CartItemModel) {
    const { userId } = cart;
    return this.usersService.findOne(userId);
  }

  @ResolveField(() => ProductModel)
  product(@Parent() cart: CartItemModel) {
    const { productId } = cart;
    return this.productsService.findProductById(productId);
  }
}
