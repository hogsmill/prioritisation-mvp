var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
  'order': Number,
  'name':String,
  'route': String
});

module.exports = mongoose.model('Category', CategorySchema);
