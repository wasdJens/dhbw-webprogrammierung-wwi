import { Component } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { SampleService } from '../obs-sample/sample.service';

@Component({
  selector: 'app-obs-sample4',
  templateUrl: './obs-sample4.component.html',
  styleUrls: ['./obs-sample4.component.css'],
})
export class ObsSample4Component {
  constructor(public sample: SampleService) {
    this.sample.cars$
      .pipe(
        filter((value) => value === 'Mercedes'),
        map((value) => value.toUpperCase())
      )
      .subscribe((car) => console.log(car));
  }
}
