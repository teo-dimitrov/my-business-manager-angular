import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import { ReportsComponent } from './report/reports/reports.component';
import {PageNotFoundPageComponent} from "./page-not-found-page/page-not-found-page.component";
import { UserComponent } from './user/user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HomeComponent,
    ReportsComponent,
    PageNotFoundPageComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]

})
export class PagesModule { }
