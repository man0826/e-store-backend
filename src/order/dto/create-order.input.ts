import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@InputType()
export class CreateOrderInput {
  @Field(() => Int)
  @IsNumber()
  totalAmount: number;
}
