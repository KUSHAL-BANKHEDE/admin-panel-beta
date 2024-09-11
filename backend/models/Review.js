// models/Review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceProvider' },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  rating: { type: Number, required: true },
  comment: { type: String },
});

module.exports = mongoose.model('Review', reviewSchema);
