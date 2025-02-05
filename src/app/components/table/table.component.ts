import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeListResponse } from './recipeListResponse.model';
import { CommonModule } from '@angular/common';
import { RecipesService } from '../../services/recipes.service';
import { FormsModule } from '@angular/forms';
import { TableColumn } from './tableColumn.model';

@Component({
  selector: 'app-table',
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent implements OnInit {
  recipes: Recipe[] = [];
  search: string = '';
  tableColumns: TableColumn[] = [{
    header: '',
    field: 'image',
    width: '100px',
    cssClass: 'recipe-image'
  },
  {
    header: 'Name',
    field: 'name',
    width: '100px',
    cssClass: 'recipe-name'
  },
  {
    header: 'Difficulty',
    field: 'difficulty',
    width: '100px',
    cssClass: 'recipe-difficulty'
  },
  {
    header: 'Time',
    field: 'prepTimeMinutes',
    width: '100px',
    cssClass: 'recipe-time'
  },
  {
    header: 'Ingredients',
    field: 'ingredients',
    width: '100px',
    cssClass: 'recipe-ingredients'
  },
  {
    header: 'kcal/serv.',
    field: 'caloriesPerServing',
    width: '100px',
    cssClass: 'recipe-calories'
  }
];

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

  }

  // type Article = ReturnType<typeof Article> - server response typing at "runtime" example

}
