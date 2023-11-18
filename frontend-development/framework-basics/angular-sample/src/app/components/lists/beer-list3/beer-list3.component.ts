import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Beer2Component } from '../../beer2/beer2.component';
import { BeerVoteComponent } from '../../beer-vote/beer-vote.component';
import { HttpClient } from '@angular/common/http';
import { BeerCreateComponent } from '../../beer-create/beer-create.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-beer-list3',
  standalone: true,
  imports: [
    CommonModule,
    Beer2Component,
    BeerVoteComponent,
    BeerCreateComponent,
    RouterLink,
  ],
  templateUrl: './beer-list3.component.html',
  styleUrl: './beer-list3.component.css',
})
export class BeerList3Component implements OnInit {
  public beers: any[] = [];
  public isLoading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>('http://localhost:8080/api/v1/beers')
      .subscribe((data) => {
        this.beers = data.items;
        this.isLoading = false;
      });
  }

  public addBeerItem(beer: any) {
    this.beers.push(beer);
  }
}
