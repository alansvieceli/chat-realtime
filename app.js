const app = require('./config/server');
const socketIO = require("socket.io");

const server = app.listen(80, () => {
  console.log("Servidor Escutando na porta 80!")
});

const io = socketIO.listen(server);

app.set('io', io);

//criar a conexão por websocket
io.on('connection', (socket) => {
  //console.log("usuário conectou")

  socket.on('disconnect', () => {
    //console.log("usuário desconectou")
  })

  socket.on('msgParaServidor', (data) => {
    socket.emit('msgParaCliente', data); //manda só pra mim
    socket.broadcast.emit('msgParaCliente', data); //manda pra todo mundo, menos pra mim

    if (parseInt(data.apelido_atualizado_nos_clientes) == 0){
      socket.emit('atualizarParticipantesParaCliente', {apelido: data.apelido}); //manda só pra mim
      socket.broadcast.emit('atualizarParticipantesParaCliente', {apelido: data.apelido}); //manda pra todo mundo, menos pra mim
    }
  })
});