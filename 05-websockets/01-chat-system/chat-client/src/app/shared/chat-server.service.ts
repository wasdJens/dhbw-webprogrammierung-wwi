import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

interface ServerMessage {
  type: string;
  data: string | number;
}

@Injectable({
  providedIn: 'root',
})
export class ChatServerService {
  // Using RXJS we create a new websocket connection to the server
  private socket = webSocket('ws://localhost:8080/chat');


  // Storage of both the messages and the current connected users
  public messages$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public connectedUsers$: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );

  constructor() {
    /**
     * In order to only care for certain type of messages we define a `type` field in our exchanged messages between the client and the websocket server.
     * Please note that the server only sends binary data - Angular parses all responses as json therefore we send valid json strings on the server side.
     *
     * The following multiplex is a setup to handle two different types of messages: chat and users.
     */
    const chat$ = this.socket.multiplex(
      () => ({ subscribe: 'chat'}),
      () => ({ unsubscribe: 'chat'}),
      (value: unknown) => (value as ServerMessage).type === 'chat'
    )

    const users$ = this.socket.multiplex(
      () => ({ subscribe: 'users'}),
      () => ({ unsubscribe: 'users'}),
      (value: unknown) => (value as ServerMessage).type === 'users'
    )


    /**
     * In the next part we have the defined handlers that react to the incomming messages which are filtered beforehand.
     * In both cases we update the current state of the messages and the connected users.
     */

    chat$.subscribe((message: unknown) => {
      const messages = this.messages$.getValue();
      messages.push(message);
      this.messages$.next(messages);
    });

    users$.subscribe((message: unknown) => {
      const count = (message as ServerMessage).data as number;
      this.connectedUsers$.next(count);
    });
  }

  /**
   * Using this method the client can send a chat message to the web socket connection
   * @param message
   */
  public sendMessage(message: string) {
    const messageObject = { type: 'chat', data: message };
    this.socket.next(messageObject);
  }

  /**
   * This method closes the connection to the websocket server
   */
  public closeConnection() {
    this.socket.complete();
  }
}
