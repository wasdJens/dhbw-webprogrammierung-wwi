import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BeerApiService } from '../../shared/beer-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './beer-create.component.html',
  styleUrl: './beer-create.component.css'
})
export class BeerCreateComponent {
  constructor(private beerApiService: BeerApiService, private router: Router) {}

  public createBeerForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    taste: new FormControl(null, [Validators.required]),
    brand: new FormControl(null, [Validators.required])
  });

  public handleFormSubmit() {
    this.beerApiService.createBeer(this.createBeerForm).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
