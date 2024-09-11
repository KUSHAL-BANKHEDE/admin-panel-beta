const ServiceProvider = require('../models/ServiceProvider');

// Get all service providers
const getAllServiceProviders = async (req, res) => {
  const providers = await ServiceProvider.find();
  res.json(providers);
};

// Add a service provider
const addServiceProvider = async (req, res) => {
  const newProvider = new ServiceProvider(req.body);
  await newProvider.save();
  res.json(newProvider);
};

module.exports = { getAllServiceProviders, addServiceProvider };
