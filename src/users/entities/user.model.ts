import { ObjectType, Field, ID, HideField } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@ObjectType()
// export class UserModel implements Prisma.UserUncheckedCreateInput {
export class UserModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @HideField()
  password: string;
}
