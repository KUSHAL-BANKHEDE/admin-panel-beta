// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Get all bookings
router.get('/', async (req, res) => {
  const bookings = await Booking.find().populate('customerId').populate('serviceId');
  res.json(bookings);
});

module.exports = router;
