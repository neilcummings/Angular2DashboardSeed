import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ReportsComponent} from './reports/reports.component';
import {TableComponent} from './table/table.component';
import {SecureComponent} from './secure/secure.component';
import {AuthGuard} from './_guards/auth.guard';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'tables', component: TableComponent},
  { path: 'secure', component: SecureComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];
