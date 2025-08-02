import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import movieData from '../../../assets/movies.json';

@Component({
  selector: 'app-movie-details',
  imports: [RouterModule, CommonModule],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss'
})

export class MovieDetails implements OnInit {
  showOverlay = true;
  id: string = '';
  movie: any = movieData;
  currentMovie: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
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
  
  goBack()
  {
    this.location.back();
  }
}