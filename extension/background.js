
function popup(){
  cuteLittleWindow = window.open("popupwindow.html", "littleWindow", "location=no,width=320,height=200"); 
}


// function getAgentDetails()
// {cuteLittleWindow = window.open("agentdetails.html", "littleWindow", "location=no,width=320,height=200");
// }

chrome.tabs.onCreated.addListener(function() {
      
      var socket = io.connect('http://localhost:3000/',{query:{username:"partha",phone:"0000000000"}});
      socket.on('connection', function(msg){
                //alert(socket.connected);
                
                });
      

        //extension();  

      socket.on('call',function(data) {extension();
        popup();});

      
      
      
     // socket.on('call',function(data) {alert('works')});        


      //   sockets.on('connect', function(){

      //     socket.on('call', function(){
      //   alert('calll to be attended');
      //     //alert("inside");
      //         socket.emit('adduser','SS','7829721707');
      //         //alert('connection established');
      //        socket.on('showExtn',function(data){
      //            alert('hii');
      //             //popup();
      //         // createTicket();
      //            });
      //   } );

      // });
      });

function extension()
{chrome.extension.sendMessage( {directive: "popup-click"}, function(response) {
                if (!("Notification" in window))
                      {alert("This browser does not support desktop notification");}

                  // Let's check whether notification permissions have alredy been granted  
                  else if (Notification.permission === "granted") {
                    // If it's okay let's create a notification
                    var notification = new Notification("Incoming Call !");
                  }

                  // Otherwise, we need to ask the user for permission
                  else if (Notification.permission !== 'denied') {
                    Notification.requestPermission(function (permission) {
                      // If the user accepts, let's create a notification
                      if (permission === "granted") {
                        var notification = new Notification(e);
                      }
                    });
                  }
                 //this.close(); // close the popup when the background finishes processing request
                    } );}
