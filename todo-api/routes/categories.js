var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Category = require('../models/Category.js');

router.get('/', function(req, res, next) {
  Category.find(function (err, data) {
    if (err) return next(err);
    categories = data.sort(function(a, b) {
      return parseInt(a.order) - parseInt(b.order)
    })
    res.json(categories);
  });
});

module.exports = router;
