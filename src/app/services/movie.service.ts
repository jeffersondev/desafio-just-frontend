import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {

  URL: string = 'https://www.theimdbapi.org/api';
  count: number = 1;

  constructor(private http: HttpClient) { }

  getMovie(movieId: string): Observable<any> {
    // return this.http.get(this.URL + '/movie', { params: new HttpParams().set('movie_id', movieId) });
    return Observable.create(observer => {
      const filme = {
        title: `Título de filme ${this.count}`,
        year: 2000 + this.count
      }
      observer.next(filme);
      observer.complete();
      this.count++;
    });
  }

}
