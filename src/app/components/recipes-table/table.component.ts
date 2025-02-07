import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeListResponse } from './recipeListResponse.model';
import { CommonModule } from '@angular/common';
import { RecipesService, SortDirection } from '../../services/recipes.service';
import { FormsModule } from '@angular/forms';
import { tableColumns } from "./recipeTableColumns";

@Component({
  selector: 'app-table',
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent implements OnInit {
  tableColumns = tableColumns;
  recipes: Recipe[] = [];
  search: string = '';
  sortBy?: { column: string, direction: SortDirection };

  constructor(private recipesService: RecipesService) {};

  ngOnInit() {
    this.recipesService.getRecipes()
      .subscribe((response: any) => {
        this.recipes = response.recipes;
      });
  }

  filterRecipes() {
    this.recipesService.searchRecipes(this.search)
      .subscribe((response: any) => {
        this.recipes = response.recipes;
      });
  }

  sortRecipes(sortColumn: string) {
    if (!this.sortBy) {
      this.sortBy = { column: sortColumn, direction: 'asc' };
    } else {
      this.sortBy = { column: sortColumn, direction: this.sortBy.direction === 'asc' ? 'desc' : 'asc' };
    }

    this.recipesService.sortRecipes(this.sortBy.column, this.sortBy.direction)
      .subscribe((response: any) => {
        this.recipes = response.recipes;
      });
  }

  // type Article = ReturnType<typeof Article> - server response typing at "runtime" example

}
