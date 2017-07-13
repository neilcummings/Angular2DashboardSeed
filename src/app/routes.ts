import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ReportsComponent} from './reports/reports.component';
import {TableComponent} from './table/table.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'tables', component: TableComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];
