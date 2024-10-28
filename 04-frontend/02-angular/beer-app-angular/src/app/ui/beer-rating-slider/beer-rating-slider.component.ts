import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-beer-rating-slider',
  standalone: true,
  imports: [],
  templateUrl: './beer-rating-slider.component.html',
  styleUrl: './beer-rating-slider.component.css'
})
export class BeerRatingSliderComponent {
  @Input({required: true}) currentRating!: number;

  @Output() ratingSelect: EventEmitter<number> = new EventEmitter<number>();

  public hoveredRating = 0;
  public ratings = [1, 2, 3, 4, 5];

  public handleClick(rating: number): void {
    this.ratingSelect.emit(rating);
  }

  public handleMouseEnter(rating: number): void {
    this.hoveredRating = rating;
  }

  public handleMouseLeave(): void {
    this.hoveredRating = 0;
  }

  public isFilled(star: number): boolean {
    return star <= (this.hoveredRating || this.currentRating);
  }
}
