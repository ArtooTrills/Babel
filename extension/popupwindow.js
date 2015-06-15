document.addEventListener('DOMContentLoaded', function () {  
	$("#create_ticket").on('click',createTicket);  //there is no () when createTicket is called . 
  createConn(); 
      
});

 function createTicket()
{
	console.log("create ticket");
	var data ;
  
    //alert('create');
    data = {"description":"Details about the issue...","subject":"Support Needed...","email":"tom@outerspace.com","phone":"58348758345","name":"partha","priority":1,"status":2};

    console.log(data);


  var xhr = new XMLHttpRequest();
	var url = "http://localhost:3000/tickets/freshdesk";
	xhr.open("POST", url,true);
	xhr.setRequestHeader('Content-Type', 'application/json');

  // send the collected data as JSON
  var response = xhr.send(JSON.stringify(data));
  console.log(JSON.stringify(data));

  return response ;

};


function createConn()
{
  var temp,username,mobile;


console.log('content working');

  $.get('userID.json', function(data) {
  temp = JSON.parse(data);
  console.log(temp.userid[0].name);
  // username="\""+temp.userid[0].name+"\"";
  // mobile="\""+temp.userid[0].mobile+"\"";
  username=temp.userid[0].name;
  mobile=temp.userid[0].mobile;

      var socket = io.connect('http://localhost:3000/',{query:{username,mobile}});

      socket.on('connection', function(msg){
      alert('connected');});
      

      socket.on('disconnected', function(msg){
      // [todo] - set disconnected icon 
        });

      socket.on('call',function(data) {
      extension(data);
      popup();
      });

  
  });

  
}