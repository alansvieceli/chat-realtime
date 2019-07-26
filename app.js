const app = require('./config/server');
const socketIO = require("socket.io");

var server = app.listen(80, () => {
  console.log("Servidor Escutando na porta 80!")
});

socketIO.listen(server);