var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

process.io = io;

var routes = require('./routes/index');
var hooks = require('./routes/hooks');
var tickets = require('./routes/tickets');

app.use('/', routes);
app.use('/hooks', hooks);
app.use('/tickets', tickets);

io.on('connection', function(socket){
  var params = {
  	username: socket.handshake.query["username"],
  	phone: socket.handshake.query["phone"]
  };
  console.log(params);
  socket.join(params.phone);
  // setTimeout(function() {
  //  	io.to("999999999").emit("call","Incoming!!! Pick up your phone, " + params.username);
  //  },500);
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});