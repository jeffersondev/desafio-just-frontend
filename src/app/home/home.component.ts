import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MOVIES } from './../config/app.config';
import { MovieService } from './../services/movie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: any[] = [];

  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit() {
    MOVIES.forEach(id => {

      this.movieService
        .getMovie(id)
        .subscribe(filme => {
          this.movies.push(filme);
        }, erro => {
          console.error(erro);
        });
    });
  }

  play(movie) {
    console.log(movie);
    this.router.navigate(['/game', movie.imdb_id]);
  }

}
