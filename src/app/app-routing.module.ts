
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ReportsComponent} from "./pages/report/reports/reports.component";
import {PageNotFoundPageComponent} from "./pages/page-not-found-page/page-not-found-page.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {UserComponent} from "./pages/user/user.component";
import { AuthenticationGuard } from './core/guard/authentication.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'user',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'reports/all', component: ReportsComponent, canActivate: [AuthenticationGuard] },
  { path: 'user/login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/users', component: UserComponent, canActivate: [AuthenticationGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundPageComponent }

];

export const AppRoutingModule = RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled'
});
