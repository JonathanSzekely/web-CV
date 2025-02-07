export interface RecipeListResponse<T> {
  recipes: Array<T>;
  total: number;
  skip: number;
  limit: number;
}
