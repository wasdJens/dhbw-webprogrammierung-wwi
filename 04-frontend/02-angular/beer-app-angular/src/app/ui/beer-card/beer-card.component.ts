import { Component, Input } from '@angular/core';
import { CardComponent } from '../cards/card/card.component';
import { BeerMugComponent } from '../beer-mug/beer-mug.component';
import { BeerRatingSliderComponent } from '../beer-rating-slider/beer-rating-slider.component';
import { BeerApiService } from '../../shared/beer-api.service';

@Component({
  selector: 'app-beer-card',
  standalone: true,
  imports: [CardComponent, BeerMugComponent, BeerRatingSliderComponent],
  templateUrl: './beer-card.component.html',
  styleUrl: './beer-card.component.css',
})
export class BeerCardComponent {
  @Input({ required: true }) beer!: any;

  constructor(private beerApiService: BeerApiService) {}

  public handleDrink() {
    this.beerApiService.drinkBeer(this.beer).subscribe((response) => {
      this.beer = response.beer;
    });
  }

  public handleRatingSelect(newRating: number) {
    this.beerApiService.rateBeer(this.beer, newRating).subscribe((response) => {
      this.beer = response.beer;
    });
  }
}
