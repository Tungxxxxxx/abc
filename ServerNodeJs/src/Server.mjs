import http from 'http';
import express from 'express';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);
let userConnects = [];
io.on('connection', (socket) => {
  socket.on('login', (user) => {
    const existUser = userConnects.find((item) => item.id === user.id);
    if (!existUser) {
      userConnects.push(user);
      console.log(user);
      socket.emit('userConnects', userConnects);
    }
  });
  socket.on('logout', (user1) => {
    console.log(user1);
    userConnects = userConnects.filter((item) => item.id !== user1.id);
    socket.emit('userConnects', userConnects);
  });
  let ids = [];
  ids = userConnects.map((item, i) => item.id);
  console.log(ids);
});

export { app, server };
