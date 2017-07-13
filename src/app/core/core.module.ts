import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from './nav/nav.component';
import {appRoutes} from '../routes';
import {RouterModule} from '@angular/router';
import {BsDropdownModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot()
  ],
  declarations: [NavComponent],
  exports: [
    NavComponent,
    RouterModule
  ],
  providers: []
})

export class CoreModule { }
