import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Beer, BeerService } from '../beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  public beers$!: Observable<Beer[]>;

  constructor(public beerService: BeerService) {

  }

  ngOnInit(): void {
    this.beers$ = this.beerService.getBeers$().pipe(
      mergeMap(() => this.beerService.beers$)
    )
  }

}
