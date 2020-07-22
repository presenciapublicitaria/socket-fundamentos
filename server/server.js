const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//Iniciar Socket IO = Comunicación del Backend
// let io = socketIO(server);
//Exportamos IO para usarlo en socket.js
module.exports.io = socketIO(server);
//Obtenemos todo lo trabajado en socket.js y lo usamos desde server
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});