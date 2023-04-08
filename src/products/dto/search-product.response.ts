import { Field, ObjectType } from '@nestjs/graphql';
import { OutputDto } from 'src/common/dto/output.dto';
import { ProductModel } from '../entities/product.model';

@ObjectType()
export class SearchProductResponse extends OutputDto {
  @Field(() => [ProductModel], { nullable: true })
  products?: ProductModel[];
}
