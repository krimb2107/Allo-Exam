const cors = require("cors");
const Routes = require("./app/routes");
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { v4: uuidV4 } = require('uuid');

app.use([
    cors(),
    express.json(),
    express.urlencoded({extended: false}),
    Routes
])

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect(`/${uuidV4()}`);
});

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room });
});

io.on('connection', (socket) => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId);
    io.sockets.in(roomId).emit('user-connected', userId);

    socket.on('disconnect', () => {
        io.sockets.to(roomId).emit('user-disconnected', userId);
    });
  });
});

server.listen(3002);