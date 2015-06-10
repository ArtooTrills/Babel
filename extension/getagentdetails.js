document.addEventListener('DOMContentLoaded', function () {  
		var name = document.getElementById('agentname').value;
    var mobile = document.getElementById('agentnumber').value;

      document.getElementById('submitbutton').addEventListener('click',main);
      
});

 function main(){ 
 	var name = document.getElementById('agentname').value;
    var mobile = document.getElementById('agentnumber').value;

	var socket = io.connect('http://localhost:3000',{query:{username:name,phone:mobile}});
	if(socket.disconnected) {socket.io.reconnect();}
	socket.emit('adduser',name,mobile);

            

     };
 	

