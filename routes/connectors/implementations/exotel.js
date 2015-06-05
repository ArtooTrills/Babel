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

var Exotel = (function(superClass) {
  extend(Exotel, superClass);

  function Exotel() {
    console.log(arguments);
    return Exotel.__super__.constructor.apply(this, arguments);
  }

  Exotel.prototype.parseCall = function(body, query) {

    // VALID_PARAMS = ["CallSid","From","DialWhomNumber","Status"];
  
  	if(query.CallSid && query.From && query.DialWhomNumber && query.Status) {
  		return {
  			callId: query.CallSid,
  			user: {
          phone: query.From
        },
  			agent: {
          phone: query.DialWhomNumber
        }
  			// we don't know what to do with status
  		};
  	} else {
  		throw new Error("Expecting CallSid, From, DialWhomNumber and Status in query params");
  	}

  };

  return Exotel;

})(CallConnector);

module.exports = Exotel;