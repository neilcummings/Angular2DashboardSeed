import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BaseRequestOptions, HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';

import {CoreModule} from './core/core.module';
import { TableComponent } from './table/table.component';
import {SharedModule} from './shared/shared.module';
import { SecureComponent } from './secure/secure.component';
import {MockBackend} from '@angular/http/testing';
import {fakeBackendProvider} from './_helpers/fake-backend';
import {AuthGuard} from './_guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportsComponent,
    TableComponent,
    SecureComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthGuard,
    //providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
