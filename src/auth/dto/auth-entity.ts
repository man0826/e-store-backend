import { Field, ObjectType } from '@nestjs/graphql';
import { UserModel } from 'src/users/entities/user.model';

@ObjectType()
export class AuthResponse {
  @Field(() => UserModel)
  user: UserModel;

  @Field(() => String)
  access_token: string;
}
