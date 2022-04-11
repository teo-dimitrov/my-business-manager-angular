import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {NotificationModule} from './notification.module';
import {NotificationService} from './service/notification.service';
import {HeaderComponent} from "./core/header/header.component";
import {FooterComponent} from "./core/footer/footer.component";
import {PagesModule} from "./pages/pages.module";
import { AuthenticationGuard } from './core/guard/authentication.guard';
import { UserService } from './service/user.service';
import {AuthenticationService} from "./service/authentication.service";
import {AuthInterceptor} from "./core/interceptors/auth.interceptor";


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NotificationModule,
    PagesModule,

  ],
  providers: [
    NotificationService,
    AuthenticationGuard,
    AuthenticationService,
    UserService,

    {provide:
      HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true}
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
