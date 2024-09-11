// routes/serviceRoutes.js
const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Add a new service
router.post('/', async (req, res) => {
  const { name, price, category, subcategory } = req.body;
  const service = new Service({ name, price, category, subcategory });
  await service.save();
  res.status(201).json(service);
});

// Update a service
router.put('/:id', async (req, res) => {
  const { name, price, category, subcategory } = req.body;
  const service = await Service.findByIdAndUpdate(req.params.id, { name, price, category, subcategory }, { new: true });
  res.json(service);
});

// Get all services
router.get('/', async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

// Delete a service
router.delete('/:id', async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
