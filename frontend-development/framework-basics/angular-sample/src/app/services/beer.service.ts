import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Beer {
  name: string;
  taste: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

  public fetchBeer(beerId: string) {
    return this.http.get<Beer>(`http://localhost:8080/api/v1/beers/${beerId}`);
  }
}
