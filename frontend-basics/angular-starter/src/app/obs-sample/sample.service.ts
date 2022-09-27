import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  public cars$: Subject<string> = new Subject();

  constructor() { }

  public addCar(car: string) {
    this.cars$.next(car);
  }
}
