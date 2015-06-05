var express = require('express');
var router = express.Router();

var processRequest = function(fn, req, res, next) {
  try {

    var Module = require("./connectors/implementations/" + req.params.service);
    
    if(Module) {

      var module = new Module();
      fn = module[fn];

      fn.call(this, req.body, req.query)
        .done(function(json) {
          res.status(200).send(json);
        }, function(err) {
          res.status(500).send(err);
        });      
      
    } else {

      res.status(400).send({error: "Uknown service: " + req.params.service});

    }

  } catch(e) {
    res.status(400).send({error: e.message || e});
  }
};


router.get('/:service', function(req,res,next) { processRequest("listTickets", req, res, next)});
router.post('/:service', function(req,res,next) { processRequest("createTicket", req, res, next)});
router.put('/:service', function(req,res,next) { processRequest("updateTicket", req, res, next)});

module.exports = router;