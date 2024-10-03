import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Beer2Component } from '../../beer2/beer2.component';
import { BeerVoteComponent } from '../../beer-vote/beer-vote.component';

@Component({
  selector: 'app-beer-list2',
  standalone: true,
  imports: [CommonModule, Beer2Component, BeerVoteComponent],
  templateUrl: './beer-list2.component.html',
  styleUrl: './beer-list2.component.css'
})
export class BeerList2Component {
  public beers = [
    { name: 'Ulmer Goldochsen Kellerbier', id: 1, taste: 'good' },
    { name: 'Wasseralfinger', id: 2, taste: 'bad' },
    { name: 'Nattheimer Spezial', id: 3, taste: 'okay' },
  ]
}
