var url = window.location.href;

if(url.substring(0,45)=='https://artoo.freshdesk.com/helpdesk/tickets/'){
	var username,mobile;
	chrome.runtime.sendMessage({method: "getLocalStorage", key: "userid"}, function(response) {
	   username = response.data;
	   console.log(username);
	   chrome.runtime.sendMessage({method: "getLocalStorage", key: "mobile"}, function(response) {
	   mobile = response.data;
	   console.log(typeof(mobile) + " : " + mobile)
	   				var iconPhone = window.document.getElementsByClassName("product-call");
					
					es = window.document.getElementsByClassName("can-make-calls hover-contact-box");
					agentMobile= es[0].getAttribute('data-phone-number');
					console.log(typeof(agentMobile) + " : " + agentMobile);
					
					
				    callUser = function(){alert("Want to make a Call ?");
						 				$.post("https://artoo:7565737dd827e04b6cbc3fdf4418cdb167435206@twilix.exotel.in/v1/Accounts/artoo/Calls/connect",
        										{From : mobile,
						    					To : agentMobile,
						    					CallerId : "08039591033",
						    					CallType : "trans"},
        								function(data, textStatus)
        										{console.log("Response from server: " + data);
        										});	
						 				};


					
					iconPhone[0].addEventListener("click",callUser);
 	
	})

	});
	} ;



