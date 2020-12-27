let socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conección con el servidor');
});

socket.on('enviarMensaje', function(data) {
    console.log(data);
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Raymundo',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log(resp);
});