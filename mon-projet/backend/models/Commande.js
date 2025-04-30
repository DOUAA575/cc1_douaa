const mongoose = require('mongoose');
const ligneCommandeSchema = require('./LigneCommande');

const commandeSchema = new mongoose.Schema({
  date: Date,
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  lignes: [ligneCommandeSchema] // tableau de lignes de commande
});

module.exports = mongoose.model('Commande', commandeSchema);
