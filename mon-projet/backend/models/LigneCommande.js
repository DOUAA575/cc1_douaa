const mongoose = require('mongoose');

const ligneCommandeSchema = new mongoose.Schema({
  produit: { type: mongoose.Schema.Types.ObjectId, ref: 'Produit' },
  qte: Number
});

module.exports = ligneCommandeSchema; // attention : pas model(), c'est un sous-document !
