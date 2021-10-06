import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EndpointService } from '../services/endpoint.service';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-obs-sample',
  templateUrl: './obs-sample.component.html',
  styleUrls: ['./obs-sample.component.css']
})
export class ObsSampleComponent {

  public userInput = '';

  constructor(public sample: SampleService) {
    this.sample.cars$.subscribe((car) => console.log(car));
  }

  public onButtonClick() {
    this.sample.addCar(this.userInput);
  }

  public handleInput(e: any) {
    this.userInput = e.target.value;
  }
}
