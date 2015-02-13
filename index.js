var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http)

app.get('/', function(request, response){
	response.sendFile(__dirname+'/index.html');
});

io.on('connection', function(socket){
	console.log('Um usuario conectado');
	socket.on('chat message', function(msg){
		console.log('---:'+msg);
		io.emit('chat message', msg);
	})
	socket.on('disconnect', function(){
		console.log('usuario desconectado');
	});
});


http.listen(3000, function(){
	console.log('server rodando'+ Date());
});