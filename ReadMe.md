<html>
<head>
  <title>Public Messaging Area</title>
  <style>
    /* Add some basic styling to make it look decent */
    body {
      font-family: Arial, sans-serif;
    }
    #message-input {
      width: 80%;
      padding: 10px;
      font-size: 16px;
    }
    #message-list {
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      max-height: 300px;
      overflow-y: auto;
    }
    #message-list li {
      padding: 10px;
      border-bottom: 1px solid #ccc;
    }
    #message-list li:last-child {
      border-bottom: none;
    }
  </style>
</head>
<body>
  <h1>Public Messaging Area</h1>
  <input id="message-input" type="text" placeholder="Type a message...">
  <button id="send-button">Send</button>
  <ul id="message-list"></ul>

  <script src="https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js"></script>
  <script>
    // Create a SockJS client
    var socket = new SockJS('https://echo.websocket.org');

    // Set up the message input and send button
    var messageInput = document.getElementById('message-input');
    var sendButton = document.getElementById('send-button');
    var messageList = document.getElementById('message-list');

    // Send a message when the send button is clicked
    sendButton.addEventListener('click', function() {
      var message = messageInput.value.trim();
      if (message!== '') {
        socket.send(message);
        messageInput.value = '';
      }
    });

    // Receive messages from the server and display them
    socket.onmessage = function(event) {
      var message = event.data;
      var messageElement = document.createElement('li');
      messageElement.textContent = message;
      messageList.appendChild(messageElement);
      messageList.scrollTop = messageList.scrollHeight;
    };

    // Close the socket when the user leaves the page
    window.addEventListener('beforeunload', function() {
      socket.close();
    });
  </script>
</body>
</html>
