import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import { ReportsComponent } from './report/reports/reports.component';



@NgModule({
  declarations: [
    HomeComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]

})
export class PagesModule { }
