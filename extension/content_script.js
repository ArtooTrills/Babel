var url = window.location.href;



if(url.substring(0,45)=='https://artoo.freshdesk.com/helpdesk/tickets/')
 	{


 		// var json=request("userID");
 		// console.log(json);
 // 	var iconPhone = window.document.getElementsByClassName("product-call");

	// callUser = function(){alert("hello kon he?");};
	// iconPhone[0].addEventListener("click",callUser);

	// es = window.document.getElementsByClassName("can-make-calls hover-contact-box");
	// agentMobile= es[0].getAttribute('data-phone-number');
	
	var mobile ;
	$.get('extension/userID.json', function(data) {
  	temp = JSON.parse(data);
  	mobile=temp.userid[0].mobile; 
  console.log("mobile" + mobile);});

  	

	// var data = { 

 //    From = 
 //    To = agentMobile;
 //    CallerId="08039591033";
 //    CallType="trans";

 //    }

    //console.log(data);

    // request.post({
    //     url:"https://NkTfioCOtqIuW2r0MrAh:X@artoo.freshdesk.com/helpdesk/tickets.json",
    //     body: data,
    //     json:true
    //   }, function(error, response, json) {
    //     console.log(json);
    //     // json into artoo json

    // });
 	
	}