var mobile,username;
var incomingNumber;


document.addEventListener('DOMContentLoaded', function () {
      saveUserId();
      recentTickets();
      
      createConn();
      
      $("#create_ticket").on('click',function(){
      document.getElementById("form").style.display="block";
      }); 

      $("#cancel").on('click',function(){
      document.getElementById("form").style.display="none";
      });

                   
      $('#form').submit(function () {
        createTicket();
        return false;
      });
      

       
          
});



function createTicket()
{     
      

      var data ;

      var phone = document.getElementById('mobile').value;
      var name = document.getElementById('nameInput').value;

      var e = document.getElementById("prioInput");

      data = {"description":document.getElementById('nameInput').value,
              "subject":document.getElementById('subInput').value,
              "email":document.getElementById('emailInput').value,
              "priority":e.options[e.selectedIndex].value,
              "status":2}; //status is 2 for open tickets 


      //document.getElementById('loading').style.display="none";
      console.log(data);
      var xhr = new XMLHttpRequest();
      var url = "http://localhost:3000/tickets/freshdesk";
      xhr.open("POST", url,true);
      xhr.setRequestHeader('Content-Type', 'application/json');

      // send the collected data as JSON
      var response = xhr.send(JSON.stringify(data));
      //console.log(JSON.stringify(data));

      return response ;

};



function recentTickets(){
        var prepUrl="https://artoo.freshdesk.com/helpdesk/tickets/";

        var i=0;

        $.getJSON("https://artoo.freshdesk.com/helpdesk/tickets.json?email=tom@outerspace.com&filter_name=all_tickets", function(data){
        
        for(i=0;i<5;i++){
              var html="<div>" + "[" + (i+1) + "] <a href=" + prepUrl + data[i].display_id + " target=\"_blank\">" + data[i].subject + "</a></div>";
              console.log(html)
              $("#append").append(html); 
  
          }} );



}


function saveUserId(){
    $.get('userID.json', function(data) {
    var temp = JSON.parse(data);
    mobile=temp.userid[0].mobile; 
    username = temp.userid[0].name;
    console.log(username + mobile);
    localStorage.setItem("userid",username);
    localStorage.setItem("mobile",mobile);
  
    } );
};


function createConn()
{
      var temp,username,mobile;


      console.log('content working');

      $.get('userID.json', function(data) {
      temp = JSON.parse(data);
      console.log(temp.userid[0].name);
      username=temp.userid[0].name;
      mobile=temp.userid[0].mobile;

      var socket = io.connect('http://localhost:3000/',{query:{username,mobile}});

      socket.on('connection', function(msg){
      console.log('connected');
      });
      

      socket.on('disconnected', function(msg){
      // // [todo] - set disconnected icon 
      });

      
      

      socket.on('call',function(data) {
      console.log("yeahhhh");
      extension(data);
      
      });

  
  });

  
}


function extension(data){

  incomingNumber=data;

  // alert("notification called");
  chrome.extension.sendMessage({ directive: "popup-click" }, function(response) {
    if(!window["Notification"]) {
      alert("This browser does not support desktop notification");
    }
    // Let's check whether notification permissions have alredy been granted  
    else if(Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification("Incoming Call from " + data);
    }
    // Otherwise, we need to ask the user for permission
    else if(Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
          // If the user accepts, let's create a notification
          if(permission === "granted") {
            var notification = new Notification(e);
          }
      });
    } 
  });
};