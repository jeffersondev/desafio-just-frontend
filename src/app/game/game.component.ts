import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

import { MovieService } from './../services/movie.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  movie: any;
  person: any;
  userPoints: number;
  answer: string;
  hintUsed: boolean;
  result: string;
  round: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService) { }

  ngOnInit() {
    this.firstRound();
  }

  respond() {
    this.generateResult();
  }

  hint() {
    this.hintUsed = true;
    this.answer = this.person.title;
  }

  nextRound() {
    if (this.round === 10) {
      this.router.navigate(['/score']);
    } else {
      this.round++;
    }
    this.initializeRound();
  }

  private generateResult() {
    if (this.answer.toUpperCase() === this.person.title.toUpperCase()) {
      if (this.hintUsed) {
        this.result = 'Você acertou! Mas usando a dica você não vai pontuar :/';
      } else {
        this.result = 'Parabéns! Acertou e ganhou um ponto :)';
        this.userPoints++;
      }
    } else {
      this.result = 'Que pena, você errou e vai perder um ponto :(';
      this.userPoints--;
    }
  }

  private firstRound() {
    this.userPoints = 0;
    this.round = 1;
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.movieService.getMovie(params.get('movie-id'))
          .subscribe(movie => {
            this.movie = movie;
            this.initializeRound();
          });
      });
  }

  private initializeRound() {
    this.sortCast();
    this.hintUsed = false;
    this.result = '';
    this.answer = '';
  }

  private sortCast() {
    const randomIndex = Math.floor((Math.random() * this.movie.cast.length));
    const cast = this.movie.cast.splice(randomIndex, 1)[0];
    const personId = this.getPersonId(cast.link);
    this.movieService.getPerson(personId).subscribe(person => {
      this.person = person;
    });
  }

  private getPersonId(link: string): string {
    let id = link.substring(link.indexOf('nm'), link.indexOf('/?'));
    return id;
  }
}
