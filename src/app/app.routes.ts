import { Routes } from '@angular/router';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TableComponent } from './components/table/table.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: TimelineComponent
  },
  {
    path: 'examples/table',
    component: TableComponent
  }
];
