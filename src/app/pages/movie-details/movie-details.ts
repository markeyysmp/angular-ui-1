import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import movieData from '../../../assets/movies.json';
import peopleData from '../../../assets/people.json';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss'
})
export class MovieDetails implements OnInit {
  id: string = '';
  movie = movieData;
  currentMovie: any;
  writtersWithId: { name: string; id: number | null }[] = [];
  directorWithId: { name: string; id: number | null } | null = null;
  starsWithId: { name: string; id: number | null }[] = [];

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
      } else {

        // Writers
        this.writtersWithId = (this.currentMovie.writters || []).map((name: string) => {
          const person = peopleData.find(p => p.name === name);
          return {
            name,
            id: person?.id ?? null
          };
        });

        // Director
        const directorName = this.currentMovie.director;
        const director = peopleData.find(p => p.name === directorName);
        this.directorWithId = {
          name: directorName,
          id: director?.id ?? null
        };

        // Stars
        this.starsWithId = (this.currentMovie.stars || []).map((name: string) => {
          const person = peopleData.find(p => p.name === name);
          return {
            name,
            id: person?.id ?? null
          };
        });

      }
    }
  }


  getMovieData(id: number) {
    return this.movie.find((movie: any) => Number(movie.id) === id);
  }
}
