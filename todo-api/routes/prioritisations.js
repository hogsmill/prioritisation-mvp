var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Prioritisation = require('../models/Prioritisation.js');

router.get('/', function(req, res, next) {
  Prioritisation.find(function (err, prioritisations) {
    if (err) return next(err);
    res.json(prioritisations);
  });
});

router.get('/view/bu-and-channel', function(req, res, next) {
  console.log('HERE 1')
  Prioritisation.find(function (err, prioritisations) {
    if (err) return next(err);
    res.json(prioritisations);
  });
});

router.get('/:id', function(req, res, next) {
  Prioritisation.findById(req.params.id, function (err, prioritisation) {
    if (err) return next(err);
    res.json(prioritisation);
  });
});

router.post('/', function(req, res, next) {
  Prioritisation.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  Prioritisation.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Prioritisation.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
