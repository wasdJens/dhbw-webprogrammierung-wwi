import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBeerMugEmpty } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-beer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './beer.component.html',
  styleUrl: './beer.component.css'
})
export class BeerComponent {
  faBeerBugEmpty = faBeerMugEmpty;
}
