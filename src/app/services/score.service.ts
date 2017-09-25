import { Injectable } from '@angular/core';

@Injectable()
export class ScoreService {

  score: any;

  getScore(): any {
    return this.score;
  }

  resetScore() {
    this.score = null;
  }

  saveScore(score: any) {
    this.score = score;
  }

}
