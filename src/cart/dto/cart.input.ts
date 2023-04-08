import { Field, InputType, Int } from '@nestjs/graphql';
import { ProductColor, ProductSize } from '@prisma/client';
import { IsEnum, IsNumber } from 'class-validator';

@InputType()
export class CartInput {
  @Field(() => Int)
  @IsNumber()
  productId: number;

  @Field(() => Int, { defaultValue: 1 })
  @IsNumber()
  quantity: number;

  @Field(() => ProductSize, { nullable: true })
  @IsEnum(ProductSize)
  size?: ProductSize;

  @Field(() => ProductColor, {
    nullable: true,
  })
  @IsEnum(ProductColor)
  color?: ProductColor;
}
