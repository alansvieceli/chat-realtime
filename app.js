const app = require('./config/server');
const socketIO = require("socket.io");

const server = app.listen(80, () => {
  console.log("Servidor Escutando na porta 80!")
});

const io = socketIO.listen(server);

//criar a conexão por websocket
io.on('connection', (socket) => {
  console.log("usuário conectou")

  socket.on('disconnect', () => {
    console.log("usuário desconectou")
  })
});