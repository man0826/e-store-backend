import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class OutputDto {
  @Field(() => Boolean)
  ok: boolean;

  @Field({ nullable: true })
  error?: string;
}
