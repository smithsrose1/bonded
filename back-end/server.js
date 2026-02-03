const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server); // Integrate Socket.IO with the HTTP server

// Serve static files (e.g., your client-side HTML)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle incoming connections
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Start the server
server.listen(3000, () => {
  console.log('listening on *:3000');
});
