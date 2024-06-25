const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

mongoose.connect('mongodb://localhost/mahjong', { useNewUrlParser: true, useUnifiedTopology: true });

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Static file serving
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Server running on port ${port}`));
