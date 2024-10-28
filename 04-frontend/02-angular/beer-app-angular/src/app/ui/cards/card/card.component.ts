import { Component, Input } from '@angular/core';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { CardContentComponent } from '../card-content/card-content.component';
import { CardFooterComponent } from '../card-footer/card-footer.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardHeaderComponent, CardContentComponent, CardFooterComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required: true}) card!: { title: string, subtitle: string };
}
