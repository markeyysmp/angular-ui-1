import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import movieData from '../../../assets/movies.json';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss'
})

export class MovieDetails implements OnInit {
  id: string = '';
  movie: any = movieData;
  currentMovie: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    if (!this.id) {
      this.router.navigate(['']);
    } else {
      this.currentMovie = this.getMovieData(Number(this.id));
      if (!this.currentMovie) {
        this.router.navigate(['']);
      }
    }
  }

  getMovieData(id: number) {
    return this.movie.find((movie: any) => Number(movie.id) === id);
  }
}