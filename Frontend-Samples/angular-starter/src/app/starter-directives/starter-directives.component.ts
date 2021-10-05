import { Component } from '@angular/core';

@Component({
  selector: 'app-starter-directives',
  templateUrl: './starter-directives.component.html',
  styleUrls: ['./starter-directives.component.css']
})
export class StarterDirectivesComponent {

  public hasPermission = false;

  public permissions = ['READ', 'CREATE', 'UPDATE', 'DELETE'];

  constructor() { }

  public handleTogglePermissions() {
    this.hasPermission = !this.hasPermission;
  }

}
