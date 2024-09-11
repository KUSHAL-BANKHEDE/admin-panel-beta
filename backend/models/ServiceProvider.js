const mongoose = require('mongoose');

const serviceProviderSchema = new mongoose.Schema({
  name: String,
  email: String,
  services: [String], // Array of services offered
  // Add other fields as needed
});

module.exports = mongoose.model('ServiceProvider', serviceProviderSchema);
