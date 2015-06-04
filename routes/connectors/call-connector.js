var CallConnector = (function() {

  function CallConnector() {
    
  }

  CallConnector.prototype.parseCall = function(body, query) {
    throw new Error("You need to override this function");
  };

  return CallConnector;

})();

module.exports = CallConnector;