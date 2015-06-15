var JSONStream = require('JSONStream');
var es = require ('event-stream');

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
var io = require("../../../app")



var Exotel = (function(superClass) {
  extend(Exotel, superClass);

  function Exotel() {
    
    return Exotel.__super__.constructor.apply(this, arguments);
  }

  Exotel.prototype.parseCall = function(body, query) {

    console.log('query' + JSON.stringify(query));
         
  	if(query.CallSid && query.CallFrom && query.DialWhomNumber && query.CallStatus) {
      //callsid needs to be unique for the notification to be sent to the browser
      

      if(query.CallFrom=='7829721707')
      io.in('7829721707').emit('call',query.CallFrom);
      else 
      io.in('0000000000').emit('call',query.CallFrom);
          
  		return {
  			callId: query.CallSid,
  			user: {
          phone: query.CallFrom
        },
  			agent: {
          phone: query.CallTo
        }

  		};}
  	 else {
  		throw new Error("Expecting CallSid, From, DialWhomNumber and Status in query params");
  	}

  };



  return Exotel;

})(CallConnector);

module.exports = Exotel;