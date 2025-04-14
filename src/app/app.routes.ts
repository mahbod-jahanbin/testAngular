import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './modules/landing/components/home/home.component';
import { LoginComponent } from './modules/auth/components/login/login.component';

export const routes: Routes = [
  {
    //روت اصلی سایت
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/landing/landing.module').then((m) => m.LandingModule),
  },
];
