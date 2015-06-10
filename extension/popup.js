function clickHandler(e) {
    chrome.extension.sendMessage({directive: "popup-click"}, function(response) {
        		if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have alredy been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
    $.get("http://localhost:3000",function(data) {
      document.getElementById('click-me').innerHTML = JSON.stringify(data);
    });
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

}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('click-me').addEventListener('click', clickHandler);
})

