import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BeerComponent } from './components/beer/beer.component';
import { BeerListComponent } from './components/lists/beer-list/beer-list.component';
import { BeerList2Component } from './components/lists/beer-list2/beer-list2.component';
import { BeerList3Component } from './components/lists/beer-list3/beer-list3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BeerComponent,
    BeerListComponent,
    BeerList2Component,
    BeerList3Component,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-sample';
}
