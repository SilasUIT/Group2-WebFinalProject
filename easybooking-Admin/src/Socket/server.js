const express = require('express');
const https = require('https');
const WebSocket = require('ws');
const fs = require('fs');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

// Serving static files from 'public' directory
app.use(express.static('public'));

const server = https.createServer({
  cert: fs.readFileSync(process.env.CERT_PATH),
  key: fs.readFileSync(process.env.KEY_PATH)
}, app);

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);

    // Broadcast to all clients
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
