const mongoose = require('mongoose');

const activiteSchema = new mongoose.Schema({
  id: Number,
  nom: String,
  email: String,
  login: String,
  mdp: String
});

module.exports = mongoose.model('Activite', activiteSchema);

