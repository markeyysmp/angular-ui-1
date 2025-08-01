import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Pagenotfound } from './pages/pagenotfound/pagenotfound';

export const routes: Routes = [
  { path: '', component: Main },
  { path: '**', component: Pagenotfound },
];
