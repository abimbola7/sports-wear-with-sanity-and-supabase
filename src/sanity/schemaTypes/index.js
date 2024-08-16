import { blockContent } from "./blockContent";
import { categories } from "./category";
import { products } from "./products";
import { tags } from "./tags";

export const schema = {
  types: [products, categories, blockContent, tags],
}
