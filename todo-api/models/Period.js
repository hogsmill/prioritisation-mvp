var mongoose = require('mongoose');

var PeriodSchema = new mongoose.Schema({
  'order': Number,
  'period':String
});

module.exports = mongoose.model('Period', PeriodSchema);
