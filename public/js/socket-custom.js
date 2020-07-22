var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('EnviarMensaje', {
    usuario: 'Cristian',
    mensaje: 'Hola todo el mundo'
}, function(resp) {
    // console.log('Se disparó el callback');
    console.log('Respuesta del servidor: ', resp);
});


//Escuchar al servidor
socket.on('MensajeServidor', function(mensajeSer) {
    console.log('Servidor:', mensajeSer);
});

// socket.on('EnviarMensaje', function(mensajeEnv) {
//     console.log('Chat: ', mensajeEnv);
// });