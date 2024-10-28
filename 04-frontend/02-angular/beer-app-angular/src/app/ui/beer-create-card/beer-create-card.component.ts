import { Component } from '@angular/core';
import { CardComponent } from '../cards/card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-beer-create-card',
  standalone: true,
  imports: [CardComponent, RouterLink],
  templateUrl: './beer-create-card.component.html',
  styleUrl: './beer-create-card.component.css'
})
export class BeerCreateCardComponent {

}
