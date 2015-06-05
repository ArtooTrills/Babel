var express = require('express');
var router = express.Router();

var processRequest = function(req, res, next) {
  try {

    var Module = require("./connectors/implementations/" + req.params.service);
    
    if(Module) {

      var module = new Module();
      var data = module.parseCall(req.body, req.query);
      res.status(200).send();

      // fetch extra data -- org, name, username, roles, contexts, etc

      process.io.to(data.agent.phone).emit("call","Incoming call !! ");

    } else {

      res.status(400).send({error: "Unknown service: " + req.params.service});

    }

  } catch(e) {
    res.status(500).send({error: e.message || e});
  }
};


router.get('/:service', processRequest);
router.post('/:service', processRequest);

module.exports = router;