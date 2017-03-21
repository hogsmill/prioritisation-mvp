var mongoose = require('mongoose');

var PrioritisationSchema = new mongoose.Schema({
  'name': String,
  'period': String,
  'route': String,
  'theme': String,
  'epic-title': String,
  'epic-description': String,
  'product-route': String,
  'product-group': String,
  'status': String,
  'product-owner': String,
  'business-sponsor': String,
  'goal-revenue': Boolean,
  'goal-cost-saving': Boolean,
  'goal-nps': Boolean,
  'goal-csat': Boolean,
  'goal-site-speed': Boolean,
  'value-customer-benefit': { type: Number, default: 0 },
  'value-incremental-sales': { type: Number, default: 0 },
  'value-cost-reduction': { type: Number, default: 0 },
  'value-legal': { type: Number, default: 0 },
  'value-stability': { type: Number, default: 0 },
  'doability-size': { type: Number, default: 0 },
  'doability-complexity': { type: Number, default: 0 },
  'priority': { type: Number, default: 0 },
  'team': {
    'id': String,
    'name': String
  },
  'optional': Array
});

module.exports = mongoose.model('Prioritisation', PrioritisationSchema);
