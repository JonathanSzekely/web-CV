import { Injectable } from '@angular/core';
import { recipesApi } from '../constants/api';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../components/table/recipe.model';
import { RecipeListResponse } from '../components/table/recipeListResponse.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private apiUrl = recipesApi;

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<RecipeListResponse<Recipe[]>> {
    return this.http.get<RecipeListResponse<Recipe[]>>(this.apiUrl);
  }

  searchRecipes(searchString: string): Observable<RecipeListResponse<Recipe[]>> {
    const params = new HttpParams().set('q', searchString);
    return this.http.get<RecipeListResponse<Recipe[]>>(`${this.apiUrl}/search`, { params });
  }
}
