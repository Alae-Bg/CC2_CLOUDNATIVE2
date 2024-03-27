require('dotenv').config();
const express = require('express');
const router = express.Router();

const Activitee = require('./Activitee');
const Tache = require('../Tache/Activitee');
const Utilisateur = require('../Auth-service/Activitee');

router.post('/activite', async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findById(req.body.utilisateur_id);
    if (!utilisateur) {
      return res.status(404).json({ message: "non trouve" });
    }

    const chambre = await Tache.findById(req.body.tache_id);
    if (!Tache) {
      return res.status(404).json({ message: "non trouvee" });
    }
    if (!Tache.disponibilite) {
      return res.status(400).json({ message: "pas disponible" });
    }

    const Activitee = new Activitee(req.body);
    await Activitee.save();

    Tache.disponibilite = false;
    await Tache.save();

    res.status(201).json(Activitee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
