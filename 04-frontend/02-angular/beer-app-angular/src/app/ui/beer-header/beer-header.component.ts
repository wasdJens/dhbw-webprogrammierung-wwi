import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-beer-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './beer-header.component.html',
  styleUrl: './beer-header.component.css'
})
export class BeerHeaderComponent {
  public isHovered: boolean = false;
}
