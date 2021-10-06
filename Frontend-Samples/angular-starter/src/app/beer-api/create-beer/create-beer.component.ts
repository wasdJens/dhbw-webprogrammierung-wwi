import { Component } from '@angular/core';
import { map, mergeMap, tap } from 'rxjs/operators';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-create-beer',
  templateUrl: './create-beer.component.html',
  styleUrls: ['./create-beer.component.css'],
})
export class CreateBeerComponent {
  public name = '';
  public taste = '';

  constructor(public beerService: BeerService) {}

  public handleCreateBeer(): void {
    this.beerService
      .createBeer$({ name: this.name, taste: this.taste })
      .pipe(
        map((beer) => {
          this.name = '';
          this.taste = '';
          return beer
        }),
        mergeMap(() => this.beerService.getBeers$())
      )
      .subscribe();
  }

  public handleInput(event: any, key: string): void {
    if (key === 'name') {
      this.name = event.target.value;
    }
    if (key === 'taste') {
      this.taste = event.target.value;
    }
  }
}
