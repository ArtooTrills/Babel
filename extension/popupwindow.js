document.addEventListener('DOMContentLoaded', function () {  
	document.getElementById('create_ticket').addEventListener('click',createTicket());
      
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