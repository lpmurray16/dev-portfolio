import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: HomeComponent },
  { path: 'projects', component: HomeComponent },
  { path: 'future-goals', component: HomeComponent },
];
