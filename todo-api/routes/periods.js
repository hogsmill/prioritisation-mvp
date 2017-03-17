var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Period = require('../models/Period.js');

router.get('/', function(req, res, next) {
  Period.find(function (err, periods) {
    if (err) return next(err);
    res.json(periods);
  });
});

module.exports = router;
