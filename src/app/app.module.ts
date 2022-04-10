import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {HeaderComponent} from "./core/header/header.component";
import {FooterComponent} from "./core/footer/footer.component";
import { HomeComponent } from './pages/home/home.component';
import {PagesModule} from "./pages/pages.module";

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
