import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-beer-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './beer-create.component.html',
  styleUrl: './beer-create.component.css',
})
export class BeerCreateComponent {
  @Output() create = new EventEmitter();

  constructor(private http: HttpClient) {}

  public beer = {
    name: '',
    taste: '',
  };

  public async handleCreate() {
    this.http
      .post<any>('http://localhost:8080/api/v1/beers', this.beer)
      .subscribe((data) => {
        this.beer.name = '';
        this.beer.taste = '';
        this.create.emit({
          name: data.createdItem.name,
          taste: data.createdItem.taste,
        });
      });
  }
}
