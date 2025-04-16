import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './modules/landing/components/home/home.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { StarComponent } from './modules/landing/components/star/star.component';

export const routes: Routes = [
  {
    //روت اصلی سایت
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'star',
    component: StarComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/landing/landing.module').then((m) => m.LandingModule),
  },
];
