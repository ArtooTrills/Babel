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

  };

  Freshdesk.prototype.updateTicket = function(body, query) {

  };

  return Freshdesk;

})(TicketConnector);

module.exports = Freshdesk;