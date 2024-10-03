import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Beer2Component } from '../../beer2/beer2.component';

@Component({
  selector: 'app-beer-list',
  standalone: true,
  imports: [CommonModule, Beer2Component],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.css'
})
export class BeerListComponent {
  public beers = [
    { name: 'Ulmer Goldochsen Kellerbier', id: 1, taste: 'good' },
    { name: 'Wasseralfinger', id: 2, taste: 'bad' },
    { name: 'Nattheimer Spezial', id: 3, taste: 'okay' },
  ]
}
