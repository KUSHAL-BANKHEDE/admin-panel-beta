// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);
