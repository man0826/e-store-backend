import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CategoryService } from 'src/category/category.service';
import { CategoryModel } from 'src/category/entities/category.model';
import { ProductModel } from './entities/product.model';
import { ProductsService } from './products.service';

@Resolver(() => ProductModel)
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService,
    private readonly categoryService: CategoryService,
  ) {}

  @Query(() => [ProductModel], { name: 'products' })
  getProducts() {
    return this.productsService.getProducts();
  }

  @Query(() => ProductModel)
  findProductBySlug(@Args('productSlug') productSlug: string) {
    return this.productsService.findProductBySlug(productSlug);
  }

  @Query(() => [ProductModel])
  search(@Args('name') name: string) {
    return this.productsService.search(name);
  }

  @ResolveField(() => [CategoryModel], { nullable: true })
  categories(@Parent() product: ProductModel) {
    const { id } = product;
    return this.categoryService.findProductCategory(id);
  }
}
