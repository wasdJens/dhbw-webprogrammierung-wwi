import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beer-vote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beer-vote.component.html',
  styleUrl: './beer-vote.component.css'
})
export class BeerVoteComponent {
  public count = 0;

  public increase() {
    this.count++;
  }

  public decrease() {
    this.count--;
  }
}
