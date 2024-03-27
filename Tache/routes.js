const express = require('express');
const router = express.Router();
const Tache = require('./Activitee');

router.post('/Tache', async (req, res) => {
  try {
    if (!req.body.titre || isNaN(req.body.titre)) {
      return res.status(400).json({ message: "Le titre est obligatoire " });
    }

    if (typeof req.body.priority !== 'number') {
      return res.status(400).json({ message: "number" });
    }

    const tache = new tache(req.body);
    await tache.save();
    res.status(201).json(tache);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/Tache/:id', async (req, res) => {
  try {
    const tache = await Tache.findById(req.params.id);

    if (!tache) {
      return res.status(404).json({ message: "tache non trouve" });
    }

    res.status(200).json(tache);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});