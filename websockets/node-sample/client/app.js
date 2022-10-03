(function () {
  // Document query selector stuff to get acces to the buttons and the message list
  const messages = document.querySelector('#messages');
  const wsButton = document.querySelector('#wsButton');
  const wsSendButton = document.querySelector('#wsSendButton');

  // Helper function to print any message inside the browser
  function showMessage(message) {
    messages.textContent += `\n${message}`;
    messages.scrollTop = messages.scrollHeight;
  }

  // Store the websocket object
  let ws;

  /**
   * Setup the websocket connection
   */
  wsButton.onclick = function () {
    if (ws) {
      ws.onerror = ws.onopen = ws.onclose = null;
      ws.close();
    }

    ws = new WebSocket("ws://www.localhost:8080");

    ws.onopen = function () {
      showMessage(`Websocket connection established!`);
    }

    ws.onclose = function () {
      showMessage(`Websocket connection closed`);
      ws = null;
    }

    ws.onmessage = function (event) {
      console.log('Received message from websocket!', event)
      showMessage(event.data);
    }
  }

  /**
   * Send a message to the websocket server
   * @returns 
   */
  wsSendButton.onclick = function() {
    if (!ws) {
      showMessage('No Websocket connection');
      return;
    }

    ws.send('Hello from Client!');
    showMessage('Sent Hello from Client');
  }
})();