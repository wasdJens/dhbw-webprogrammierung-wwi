import { Component } from '@angular/core';
import { BeerApiService } from '../../shared/beer-api.service';
import { AsyncPipe } from '@angular/common';
import { BeerCardComponent } from '../beer-card/beer-card.component';
import { BeerCreateCardComponent } from '../beer-create-card/beer-create-card.component';

@Component({
  selector: 'app-beer-list',
  standalone: true,
  imports: [AsyncPipe, BeerCardComponent, BeerCreateCardComponent],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.css'
})
export class BeerListComponent {
  public beers$;

  constructor(private beerApiService: BeerApiService) {
    this.beers$ = this.beerApiService.fetchBeers();
  }
}
