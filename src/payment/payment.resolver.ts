import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { GqlAuthGuard } from 'src/auth/gards/auth.guard';
import { UserModel } from 'src/users/entities/user.model';
import { CheckoutSessionResponse } from './dto/checkout-session.response';
import { CreateSessionResponse } from './dto/create-session.response';
import { PaymentService } from './payment.service';

@Resolver()
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

  @Query(() => CreateSessionResponse)
  @UseGuards(GqlAuthGuard)
  createCheckoutSession(@CurrentUser() user: UserModel) {
    return this.paymentService.createCheckoutSession(user.id);
  }

  @Query(() => CheckoutSessionResponse)
  async getOrderStatusFromStripe(@Args('id') id: string) {
    return this.paymentService.getOrderStatusFromStripe(id);
  }
}
