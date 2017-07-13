import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from './nav/nav.component';
import {appRoutes} from '../routes';
import {RouterModule} from '@angular/router';
import {BsDropdownModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from '../_services/authentication.service';
import {UserService} from '../_services/user.service';
import {fakeBackendProvider} from '../_helpers/fake-backend';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  declarations: [NavComponent],
  exports: [
    NavComponent,
    RouterModule
  ],
  providers: [
    AuthenticationService,
    UserService,


  ]
})

export class CoreModule { }
