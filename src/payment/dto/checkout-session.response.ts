import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CheckoutSessionResponse {
  @Field({ nullable: true })
  status?: string;
}
