import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-beer-mug',
  standalone: true,
  imports: [],
  templateUrl: './beer-mug.component.html',
  styleUrl: './beer-mug.component.css'
})
export class BeerMugComponent implements OnChanges{
  @Input() rating: number = 1;

  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>();

  public fillHeight = 0;
  public fillY = 0;
  public foamHeight = 10;

  ngOnChanges(): void {
    this.fillHeight = this.rating * 20;
    this.fillY = 140 - this.fillHeight;
    this.foamHeight = 10;
  }

  public handleClick(): void {
    this.clickEvent.emit();
  }
}
