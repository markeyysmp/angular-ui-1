import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common'; 
import { ActivatedRoute, Router } from '@angular/router';
import ActorData from '../../../assets/people.json';

@Component({
  selector: 'actors',
  imports: [CommonModule],
  templateUrl: './actors.html',
  styleUrl: './actors.scss'
})

export class Actorsdetails implements OnInit {
goBack() {
throw new Error('Method not implemented.');
}
  id: string = '';
  actors: any = ActorData;
  actorshow: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    if (!this.id) {
      this.router.navigate(['']);
    } else {
      this.actorshow = this.getMovieData(Number(this.id));
      if (!this.actorshow) {
        this.router.navigate(['']);
      }
    }
  }

  getMovieData(id: number) {
    return this.actors.find((actor: any) => Number(actor.id) === id);
  }
}