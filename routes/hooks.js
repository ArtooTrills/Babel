var express = require('express');
var router = express.Router();



var processRequest = function(req, res, next) {
  try {


    res.header("Access-Control-Allow-Origin", "*");
    var Module = require("./connectors/implementations/" + req.params.service);
    
    if(Module) {

      var module = new Module();
      try{var data = module.parseCall(req.body, req.query);
      res.status(200).send();}
      catch(e) {console.log(e.trace);}

      //console.log(req.query.DialWhomNumber);


      // fetch extra data -- org, name, username, roles, contexts, etc

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