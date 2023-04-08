import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserModel } from './entities/user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gards/auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { CartItemModel } from 'src/cart/entities/cart-item.model';
import { CartService } from 'src/cart/cart.service';

@Resolver(() => UserModel)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly cartService: CartService,
  ) {}

  @Mutation(() => UserModel)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Mutation(() => UserModel)
  @UseGuards(GqlAuthGuard)
  updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
    @CurrentUser() user: UserModel,
  ) {
    return this.usersService.update(user.id, updateUserInput);
  }

  // @Mutation(() => UserModel)
  // removeUser(@Args('id', { type: () => ID }) id: string) {
  //   return this.usersService.remove(id);
  // }

  @Query(() => UserModel, { name: 'loginUser' })
  @UseGuards(GqlAuthGuard)
  getLoginUser(@CurrentUser() user: UserModel) {
    return user;
  }

  @ResolveField(() => [CartItemModel])
  cartItems(@Parent() user: UserModel) {
    const { id } = user;
    return this.cartService.getCartItems(id);
  }
}
