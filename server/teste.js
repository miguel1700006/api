var app = require('express')();
// passa o express para o http-server
var http = require('http').Server(app);
// passa o http-server par ao socketio
 

// cria uma rota para fornecer o arquivo index.html
const cliente = app.get('/', function(req, res){
  res.sendFile(__dirname + '/cliente.html');
});
const comida =  app.get('/', function(req, res){
  res.sendFile(__dirname + '/comida.html');
});
// inicia o servidor na porta informada, no caso vamo iniciar na porta 3000
http.listen(8080, function(){
    console.log('Servidor rodando em: http://localhost:8080');
  });
  

