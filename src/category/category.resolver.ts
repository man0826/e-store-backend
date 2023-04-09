import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ProductModel } from 'src/products/entities/product.model';
import { CategoryModel } from './entities/category.model';
import { CategoryService } from './category.service';
import { ProductsService } from 'src/products/products.service';

@Resolver(() => CategoryModel)
export class CategoryResolver {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly productsService: ProductsService,
  ) {}

  @Query(() => [CategoryModel], { name: 'categories' })
  getCategories() {
    return this.categoryService.getCategories();
  }

  @Query(() => CategoryModel)
  findCategoryBySlug(@Args('categorySlug') slug: string) {
    return this.categoryService.findCategoryBySlug(slug);
  }

  @ResolveField(() => [ProductModel])
  products(@Parent() category: CategoryModel) {
    const { id } = category;
    return this.productsService.findCategoryProducts(id);
  }
}
