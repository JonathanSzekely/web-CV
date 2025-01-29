import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeListResponse } from './recipeListResponse.model';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private http: HttpClient) {};

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get('https://dummyjson.com/recipes')
      .subscribe((response: any) => {
        let recipeListResponse = response as RecipeListResponse<Recipe>;
        this.recipes = response.recipes as Recipe[];
        console.log(recipeListResponse);
      });
  }
}
