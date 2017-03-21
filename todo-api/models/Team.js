var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({
  'id': String
});

module.exports = mongoose.model('Team', TeamSchema);
