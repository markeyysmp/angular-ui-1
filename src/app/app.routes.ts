import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { MovieDetails } from './pages/movie-details/movie-details';
import { Actorsdetails } from './pages/actors/actors'

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'movie-detail/:id', component: MovieDetails },
  { path: 'actors/:id', component: Actorsdetails },
  { path: '**', component: Main },
];
