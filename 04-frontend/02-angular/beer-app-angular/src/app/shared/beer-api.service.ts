import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerApiService {
  private readonly BASE_BEER_URL = 'http://localhost:8080/beer';

  constructor(private http: HttpClient) { }

  public drinkBeer(beer: any): Observable<any> {
    return this.http.post(`${this.BASE_BEER_URL}/${beer.id}/drink`, beer);
  }

  public rateBeer(beer: any, rating: number): Observable<any> {
    return this.http.post(`${this.BASE_BEER_URL}/${beer.id}/rate`, { rating });
  }

  public fetchBeers(): Observable<any> {
    return this.http.get(this.BASE_BEER_URL);
  }

  public createBeer(formData: FormGroup): Observable<any> {
    return this.http.post(this.BASE_BEER_URL, {
      name: formData.get('name')?.value,
      taste: formData.get('taste')?.value,
      brand: formData.get('brand')?.value,
    });
  }
}
