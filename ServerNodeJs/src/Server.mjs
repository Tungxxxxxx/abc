import http from 'http';
import express from 'express';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);
let userConnects = [];
io.on('connection', (socket) => {
  socket.on('login', (user) => {
    const existUser = userConnects.find((item) => item.user.id === user.id);
    if (!existUser) {
      userConnects.push({ user: user, id: socket.id });
      console.log('login', userConnects);
      io.emit('userConnects', userConnects);
    }
  });
  socket.on('logout', (user1) => {
    userConnects = userConnects.filter((item) => item.user.id !== user1.id);
    console.log('logout', userConnects);
    io.emit('userConnects', userConnects);
  });
});

export { app, server };
