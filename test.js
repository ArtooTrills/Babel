var request = require('request')
  , JSONStream = require('JSONStream');
  // , util = require("util")

var es = require ('event-stream');

var mNumber="8087515898";
var extnValue;

var jsonInput = request('https://api.artoo.in/ujjivan/users?access_token=824884e4-62ff-43d1-a609-567385f89f3e', 
		function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    var jsonInput = JSON.parse(body); // Show the HTML for the Google homepage.
	    var users = jsonInput.users;
	    var validUser = users.filter(function(user){
	   
	    	if(user.mobile === mNumber) 
	    		{extnValue= user.username + " : " + user.first_name + "," + user.mobile;
	    		return console.log(extnValue);
	    		}
					    	//return (user.mobile === mNumber);
	    })
	  }
	});



