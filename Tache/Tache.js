const mongoose = require('mongoose');

const tacheSchema = new mongoose.Schema({
  id: Number,
  titre: String,
  description: String,
  date: Date,
  priority: Number
});

module.exports = mongoose.model('Tache',tacheSchema);

