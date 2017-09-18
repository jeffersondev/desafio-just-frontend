import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MOVIES } from './../config/app.movies.config';
import { MovieService } from './../services/movie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filmes: any[] = [];
  image: string = 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg';
  image2: string = 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SY1000_CR0,0,685,1000_AL_.jpg';

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    MOVIES.forEach(id => {

      this.movieService
        .getMovie(id)
        .subscribe(filme => {
          this.filmes.push(filme);
        }, erro => {
          console.error(erro);
        });
    });
  }

  play(movie) {
    this.router.navigate(['/game', movie.title]);
  }

}
