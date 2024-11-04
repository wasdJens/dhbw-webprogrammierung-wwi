import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ChatServerService } from './shared/chat-server.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public messages$: Observable<any[]>;
  public connectedUsers$: Observable<number>;

  constructor(private chatServerService: ChatServerService) {
    this.messages$ = this.chatServerService.messages$
      .asObservable()
      .pipe(map((messages) => messages));

    this.connectedUsers$ = this.chatServerService.connectedUsers$
      .asObservable()
      .pipe(map((count) => count));
  }

  public handleSend(): void {
    this.chatServerService.sendMessage('Hello from the Client!');
  }
}
