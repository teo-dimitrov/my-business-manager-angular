import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {FormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
