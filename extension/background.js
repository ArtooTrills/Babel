function popup(){
  cuteLittleWindow = window.open("popupwindow.html", "littleWindow", "location=no,width=320,height=200"); 
  
}

chrome.tabs.onCreated.addListener(function() {
  
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getLocalStorage")
      sendResponse({data: localStorage[request.key]});
});

function saveUserId(){
    $.get('userID.json', function(data) {
    var temp = JSON.parse(data);
    var mobile=temp.userid[0].mobile; 
    var username = temp.userid[0].name;
    localStorage.setItem("userid",username);
    localStorage.setItem("mobile",mobile);
  
    } );
};


function extension(data){
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