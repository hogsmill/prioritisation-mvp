var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Team = require('../models/Team.js');

router.get('/', function(req, res, next) {
  Team.find(function (err, teams) {
    if (err) return next(err);
    res.json(teams);
  });
});

module.exports = router;
