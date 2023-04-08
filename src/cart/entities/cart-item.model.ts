import { Field, ID, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CartStatus, ProductColor, ProductSize } from '@prisma/client';

registerEnumType(ProductSize, {
  name: 'ProductSize',
});

registerEnumType(ProductColor, {
  name: 'ProductColor',
});

registerEnumType(CartStatus, {
  name: 'CartStatus',
});

@ObjectType()
export class CartItemModel {
  @Field(() => ID)
  id: string;

  @Field(() => Int)
  quantity: number;

  @Field(() => Int)
  totalAmount: number;

  @Field(() => ProductSize, { nullable: true })
  size?: ProductSize;

  @Field(() => ProductColor, { nullable: true })
  color?: ProductColor;

  @Field()
  userId: string;

  @Field(() => Int)
  productId: number;

  @Field({ nullable: true })
  orderId: string;

  @Field(() => CartStatus)
  status: CartStatus;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
