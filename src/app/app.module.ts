import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MovieService } from './services/movie.service';
import { GameComponent } from './game/game.component';
import { ScoreComponent } from './score/score.component';
import { ScoreService } from './services/score.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MovieService,
    ScoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
