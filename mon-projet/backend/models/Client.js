const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  nom: String,
  age: Number,
  email: { type: String, unique: true }
});

module.exports = mongoose.model('Client', clientSchema);
