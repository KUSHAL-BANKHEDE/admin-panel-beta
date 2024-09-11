// models/Service.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  subcategory: { type: String },
});

module.exports = mongoose.model('Service', serviceSchema);
