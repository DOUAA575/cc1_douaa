const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
  libelle: String,
  pu: Number
});

module.exports = mongoose.model('Produit', produitSchema);
