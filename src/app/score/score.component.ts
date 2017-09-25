import { Component, OnInit } from '@angular/core';

import { ScoreService } from './../services/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  score: any;

  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
    this.score = this.scoreService.getScore();
  }

}
