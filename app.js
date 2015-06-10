var app = require('express')();
var bodyParser = require('body-parser');
var http = require('http').Server(app);

app.use(bodyParser.json()); // for parsing application/json

var io = require('socket.io')(http);

process.io = io;

var routes = require('./routes/index');
var hooks = require('./routes/hooks');
var tickets = require('./routes/tickets');



app.use('/', routes);
app.use('/hooks', hooks);
app.use('/tickets', tickets);

var enableCORS = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Access-Control-Allow-Origin, X-HTTP-Method-Override, Content-Type, Authorization, Accept");
 
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
 
 
// enable CORS!
app.use(enableCORS);


//var socket = io('http://localhost:3000');
usernames = [];

  

io.on('connection', function(socket){
  var params = {
  	username: socket.handshake.query["username"],
  	phone: socket.handshake.query["phone"]
  };

  console.log(params);

  //if(usernames['partha'] == socket.handshake.query["username"])
   io.on('adduser', function(data){
    console.log('user add');
       // we store the username in the socket session for this client
    socket.username = username;
    //socket.phone = mobile;
    usr=username;
    // add the client's username to the global list
    usernames.push(username);
    console.log(0,usernames);
  });

  
  // io.emit('call', function(){
  //        alert('call to be attended');});
  //process.io.emit('showExtn','fine');
  // var usr;  
 

//if (socket.handshake.query["phone"]=="1111")
  {io.emit('call','SS');}

  



});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


module.exports = usernames;