var express    = require('express');
var router     = express.Router();
var lightcurve = require("../models/lightcurve");

router.get('/:id(\\d+)', function (req, res) {
  lightcurve.methods.show(req.params.id).then(function (result) { res.send(result); });
});

module.exports = router;
