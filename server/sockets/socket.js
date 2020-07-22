const { io } = require('../server');
//Importamos la funcion io del server

io.on('connection', (client) => {

    console.log('Usuario Conectado');

    client.emit('MensajeServidor', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {

        console.log('Usuario Desconectado');

    });

    //Escuchar al Cliente
    client.on('EnviarMensaje', (data, callback) => {

        console.log(data);


        // client.broadcast.emit('EnviarMensaje', 'Prueba de broadcast');
        client.broadcast.emit('MensajeServidor', data);




    });

});