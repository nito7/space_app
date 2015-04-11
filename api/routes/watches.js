var express = require('express');
var router  = express.Router();
var watch   = require("../models/watch");

router.get('/', function (req, res) {
  watch.methods.index().then(function (result) { res.send(result); });
});

router.get('/:id(\\d+)', function (req, res) {
  watch.methods.show(req.params.id).then(function (result) { res.send(result); });
});

module.exports = router;