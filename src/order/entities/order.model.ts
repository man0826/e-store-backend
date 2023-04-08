import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class OrderModel {
  @Field(() => ID)
  id: string;

  @Field()
  userId: string;

  @Field(() => Int)
  totalAmount: number;

  @Field(() => Date)
  createdAt: Date;
}
