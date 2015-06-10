var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

var Q = require("q");
var request = require("request");
var TicketConnector = require("../ticket-connector");

var Freshdesk = (function(superClass) {
  extend(Freshdesk, superClass);

  function Freshdesk() {
    return Freshdesk.__super__.constructor.apply(this, arguments);
  }

  Freshdesk.prototype.listTickets = function(body, query) {
    var d = Q.defer();

    request({
        url:"https://NkTfioCOtqIuW2r0MrAh:X@artoo.freshdesk.com/helpdesk/tickets.json",
        json:true
      }, function(error, response, json) {
        console.log(json);
        // json into artoo json

        var tickets = [];
        for(var j in json) {
          var row = json[j];

          tickets.push({
            id: row.id,
            ticketNo: row.display_id,
            text: row.description,
            updated_at: row.updated_at,
            created_at: row.created_at,
            status: row.status_name
          });
        }

        d.resolve(tickets);
    });

    return d.promise;
  };

  Freshdesk.prototype.createTicket = function(body, query) {
    var d = Q.defer();

    if(typeof body === "string") {
      body = JSON.parse(body);
      
    }
    else console.log(body);

    var data = { helpdesk_ticket: {}, helpdesk: {}};

    data.helpdesk_ticket.description = body.description;
    data.helpdesk_ticket.subject = body.subject;
    //length < 25 ? body.text : body.text.slice(0,25);
    data.helpdesk_ticket.email = body.email;
    // || (body.user.username + "@" + body.org + ".com");
    data.helpdesk_ticket.phone = body.phone;
    data.helpdesk_ticket.name = body.name;
    data.helpdesk_ticket.priority = 1;
    data.helpdesk_ticket.status = 2;
    data.helpdesk.tags = "ujjivan,moo,foo";//[{name:"ujjivan"},{name:"sync"}];

    console.log(data);

    request.post({
        url:"https://NkTfioCOtqIuW2r0MrAh:X@artoo.freshdesk.com/helpdesk/tickets.json",
        body: data,
        json:true
      }, function(error, response, json) {
        console.log(json);
        // json into artoo json

        
        d.resolve(json);
    });

    return d.promise;

  };

  Freshdesk.prototype.updateTicket = function(body, query) {
    var d = Q.defer();

    if(typeof body === "string") {
      body = JSON.parse(body);
    }

    var data = { helpdesk_ticket: {}, helpdesk: {}, helpdesk_note:{}};
    
    data.helpdesk_ticket.priority = 2;
    data.helpdesk_ticket.status = 2;

    data.helpdesk_note.body = body.text;
    data.helpdesk_note.private = false;
    
    console.log(data);

    request.put({
        //pass query param as no , and that ticket wil be updated 
        url:"https://NkTfioCOtqIuW2r0MrAh:X@artoo.freshdesk.com/helpdesk/tickets/" + body.id +"  .json",
        body: data,
        json:true
      }, function(error, response, json) {
        console.log(json);
        // json into artoo json

        
        d.resolve(json);
    });

    return d.promise;
  };

  return Freshdesk;

})(TicketConnector);

module.exports = Freshdesk;