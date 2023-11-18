import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerComponent } from '../beer/beer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BeerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
