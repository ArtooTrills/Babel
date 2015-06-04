chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        
        switch (request.directive) {
        case "popup-click":
            // execute the content script
            chrome.tabs.executeScript(null, { // defaults to the current tab
                file: "contentscript.js", // script to inject into page and run in sandbox
                allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
            });
            sendResponse({}); // sending back empty response to sender
            break;
        default:
            // helps debug when request directive doesn't match
            alert("Unmatched request of '" + request + "' from script to background.js from " + sender);
        } 
    }
       
);


var message;

chrome.windows.onCreated.addListener(function() {
       //alert("looks very good ");

        var socket = io.connect('http://localhost:3000/',{query:{username:"partha",phone:"0000000000"}});
        socket.on('connect', function(msg){
                //$message.val(msg);
                //alert(msg);
                chrome.extension.sendMessage( {directive: "popup-click"}, function(response) {
                if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have alredy been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
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

  

        this.close(); // close the popup when the background finishes processing request
    });

       
        });
    });



