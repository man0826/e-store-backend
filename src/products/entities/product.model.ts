import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductModel {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field()
  description: string;

  @Field(() => [String])
  images: string[];

  @Field(() => Int)
  price: number;

  @Field(() => [String], { nullable: true })
  colors?: string[];

  @Field(() => [String], { nullable: true })
  sizes?: string[];

  @Field(() => Date)
  createdAt: Date;
}
