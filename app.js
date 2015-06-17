var app = require('express')();
var bodyParser = require('body-parser');
var http = require('http').Server(app);

app.use(bodyParser.json()); // for parsing application/json

var io = require('socket.io')(http);

process.io = io;

var routes = require('./routes/index');
var hooks = require('./routes/hooks');
var tickets = require('./routes/tickets');

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Access-Control-Allow-Origin, X-HTTP-Method-Override, Content-Type, Authorization, Accept");
 
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
});

app.use('/', routes);
app.use('/hooks', hooks);
app.use('/tickets', tickets);
 

var usernames = {};


var name = 'partha';
process.name = name;

process.usernames = usernames;

io.on('connection', function(socket){
  var params = {   
  	username: socket.handshake.query.username,
  	phone: socket.handshake.query.mobile
  };

  console.log(params);

  socket.join(params.phone); //adding the support person to list 

  //if(usernames['partha'] == socket.handshake.query["username"])
   io.on('adduser', function(data){
    console.log('user add');
    // usernames[]; 
    console.log(0,usernames);
  });
  // getInfo()
  // getInfo()-> mothership (nos){} || if nos is "12239" json {username: nos: details: } send json
  // promise after call
  
});




http.listen(3000, function(){
  console.log('listening on *:3000');
});



module.exports = io;