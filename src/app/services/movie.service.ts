import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {

  URL: string = 'https://www.theimdbapi.org/api';

  constructor(private http: HttpClient) { }

  getMovie(movieId: string): Observable<any> {
    return this.http.get(this.URL + '/movie', { params: new HttpParams().set('movie_id', movieId) });
  }

}
