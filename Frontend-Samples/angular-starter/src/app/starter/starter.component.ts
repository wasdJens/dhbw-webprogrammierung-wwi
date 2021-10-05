import { Component } from '@angular/core';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent {
  public message = 'Some content';
  public isDisabled = false;

  constructor() { }

  public handleButtonClick() {
    const randomMsg = ['Something else', 'Something new', 'Different', 'Angular', 'DHBW'];
    const randIndex = Math.floor(Math.random() * randomMsg.length);
    this.message = randomMsg[randIndex];
  }
}
