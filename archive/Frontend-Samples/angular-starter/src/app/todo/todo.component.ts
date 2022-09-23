import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../services/endpoint.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  public todo = null;

  constructor(public endpoint: EndpointService) { }

  async ngOnInit(): Promise<void> {
    this.todo = await this.endpoint.getTodo();
  }
}
