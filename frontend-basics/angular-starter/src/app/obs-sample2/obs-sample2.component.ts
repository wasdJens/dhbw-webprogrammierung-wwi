import { Component } from '@angular/core';
import { SampleService } from '../obs-sample/sample.service';

@Component({
  selector: 'app-obs-sample2',
  templateUrl: './obs-sample2.component.html',
  styleUrls: ['./obs-sample2.component.css']
})
export class ObsSample2Component {

  constructor(public sample: SampleService) {
    this.sample.cars$.subscribe((car) => console.log(car));
  }

}
