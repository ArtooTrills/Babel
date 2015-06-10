function popup(){
  cuteLittleWindow = window.open("popupwindow.html", "littleWindow", "location=no,width=320,height=200"); 
}

chrome.tabs.onCreated.addListener(function() {

  // [todo] - get these parameters from Chrome extension Settings
  var socket = io.connect('http://localhost:3000/',{query:{username:"partha",phone:"0000000000"}});

  socket.on('connection', function(msg){
      // [todo] - set connected icon
    });
  socket.on('disconnected', function(msg){
      // [todo] - set disconnected icon
    });

  socket.on('call',function(data) {
    extension();
    popup();
  });

});

function extension(){
  chrome.extension.sendMessage({ directive: "popup-click" }, function(response) {
    if(!window["Notification"]) {
      alert("This browser does not support desktop notification");
    }
    // Let's check whether notification permissions have alredy been granted  
    else if(Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification("Incoming Call from Backgroundjs!");
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