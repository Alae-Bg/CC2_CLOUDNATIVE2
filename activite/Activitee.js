const mongoose = require('mongoose');

const ActiviteeSchema = new mongoose.Schema({
  id : Number,
  utilisateur_id: Number,
  tache_id: Number,
});

module.exports = mongoose.model('Activitee', ActiviteeSchema);

