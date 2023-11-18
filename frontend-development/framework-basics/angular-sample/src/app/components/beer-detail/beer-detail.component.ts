import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Beer, BeerService } from '../../services/beer.service';
import { Observable } from 'rxjs';
import { Beer2Component } from '../beer2/beer2.component';

@Component({
  selector: 'app-beer-detail',
  standalone: true,
  imports: [CommonModule, Beer2Component],
  templateUrl: './beer-detail.component.html',
  styleUrl: './beer-detail.component.css',
})
export class BeerDetailComponent {
  public beer$: Observable<Beer>;

  constructor(private beerService: BeerService) {
    this.beer$ = new Observable<Beer>();
  }

  @Input()
  set beerId(beerId: string) {
    this.beer$ = this.beerService.fetchBeer(beerId);
  }
}
