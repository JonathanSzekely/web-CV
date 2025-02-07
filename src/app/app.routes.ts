import { Routes } from '@angular/router';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TableComponent } from './components/recipes-table/table.component';
import { RecipesService } from './services/recipes.service';

export const appRoutes: Routes = [
  {
    path: '',
    component: TimelineComponent
  },
  {
    path: 'examples/table',
    component: TableComponent,
    providers: [ RecipesService ]
  }
];
