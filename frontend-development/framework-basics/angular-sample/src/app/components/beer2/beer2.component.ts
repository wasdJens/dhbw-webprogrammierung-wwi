import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-beer2',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './beer2.component.html',
  styleUrl: './beer2.component.css',
})
export class Beer2Component {
  @Input() beer!: { name: string; taste: string };

  faBeerBugEmpty = faBeerMugEmpty;
}
