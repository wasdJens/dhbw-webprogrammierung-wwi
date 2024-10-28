import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BeerHeaderComponent } from './ui/beer-header/beer-header.component';
import { BeerFooterComponent } from './ui/beer-footer/beer-footer.component';
import { BeerListComponent } from './ui/beer-list/beer-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BeerHeaderComponent, BeerFooterComponent, BeerListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'beer-app-angular';
}
