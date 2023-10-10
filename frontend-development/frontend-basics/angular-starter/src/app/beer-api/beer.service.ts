import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface Beer {
  name: string;
  taste: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  public beers$: BehaviorSubject<Beer[]> = new BehaviorSubject([] as Beer[]);

  constructor(private http: HttpClient) {}

  public getBeers$(): Observable<Beer[]> {
    return this.http.get<Beer[]>('http://localhost:8080/beers').pipe(
      catchError(this.handleError),
      map((beers) => {
        this.beers$.next(beers);
        return beers;
      })
    );
  }

  public createBeer$(newBeer: Beer): Observable<string> {
    return this.http
      .post<string>('http://localhost:8080/beer', newBeer, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occured: ', error.error);
    } else {
      console.error(
        `An error occured. Status ${error.status} ${error.statusText}`,
        error.error
      );
    }
    return throwError('Something went wrong :(');
  }
}
