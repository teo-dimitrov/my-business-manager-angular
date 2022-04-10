import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  }
]

export const AuthRoutingModule = RouterModule.forChild(routes);
