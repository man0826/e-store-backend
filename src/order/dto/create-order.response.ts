import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateOrderResponse {
  @Field()
  message: string;
}
