import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ReportsComponent} from "./pages/report/reports/reports.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'user',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'reports/all', component: ReportsComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'user/management', component: UserComponent, canActivate: [AuthenticationGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundPageComponent }

];

export const AppRoutingModule = RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled'
});
