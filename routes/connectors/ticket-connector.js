var TicketConnector = (function() {

  function TicketConnector() {
  }

  TicketConnector.prototype.listTickets = function(body, query) {
    throw new Error("You need to override this function");
  };

  TicketConnector.prototype.createTicket = function(body, query) {
    throw new Error("You need to override this function");
  };

  TicketConnector.prototype.updateTicket = function(body, query) {
    throw new Error("You need to override this function");
  };

  return TicketConnector;

})();

module.exports = TicketConnector;