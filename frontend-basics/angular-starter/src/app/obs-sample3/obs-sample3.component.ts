import { Component } from '@angular/core';
import { SampleService } from '../obs-sample/sample.service';

@Component({
  selector: 'app-obs-sample3',
  templateUrl: './obs-sample3.component.html',
  styleUrls: ['./obs-sample3.component.css'],
})
export class ObsSample3Component {
  constructor(public sample: SampleService) {
    this.sample.cars$.subscribe((car) => {
      if (car === 'Mercedes') {
        console.log(car.toUpperCase());
      }
    });
  }
}
