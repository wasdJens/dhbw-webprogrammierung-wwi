import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080});

wss.on('connection', function connection(ws) {
  /**
   * Print any message that a client sends to the server
   */
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  })

  /**
   * Every 5 seconds send a message to any connected client
   */
  console.log('Started client interval');
  const interval = setInterval(function () {
    ws.send('Hello from Server!')
  }, 5000);

  /**
   * When a client closes the connection again stop the interval
   */
  ws.on('close', function () {
    console.log('Stopping client interval');
    clearInterval(interval);
  })
})

