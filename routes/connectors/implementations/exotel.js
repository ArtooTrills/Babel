var extend = function(child, parent) { for (var key in parent) 
    { if (hasProp.call(parent, key)) child[key] = parent[key]; } 

    function ctor() 
      { this.constructor = child; } 

    ctor.prototype = parent.prototype; 
    child.prototype = new ctor(); 
    child.__super__ = parent.prototype; 
    return child; },
    hasProp = {}.hasOwnProperty;

var CallConnector = require("../call-connector");
var usernames = require("../../../app");

var Exotel = (function(superClass) {
  extend(Exotel, superClass);

  function Exotel() {
    
    return Exotel.__super__.constructor.apply(this, arguments);
  }

  Exotel.prototype.parseCall = function(body, query) {

  

  	if(query.CallSid && query.From && query.DialWhomNumber && query.Status) {
      console.log(query);
      //console.log("username : " + usernames['partha']);

       if(typeof usernames['SS'] === 'undefined') 
        {console.log("undefined number : " + query.DialWhomNumber);
      
            }
       else 
        {
          console.log("agent online");
         
            console.log("exotel socket connected");
            
  		return {
  			callId: query.CallSid,
  			user: {
          phone: query.From
        },
  			agent: {
          phone: query.DialWhomNumber
        }

  		};}}
  	 else {
  		throw new Error("Expecting CallSid, From, DialWhomNumber and Status in query params");
  	}

  };



  return Exotel;

})(CallConnector);

module.exports = Exotel;