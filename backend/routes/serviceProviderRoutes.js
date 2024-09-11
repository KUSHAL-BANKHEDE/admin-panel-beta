const express = require('express');
const { getAllServiceProviders, addServiceProvider } = require('../controllers/serviceProviderController');
const router = express.Router();

router.get('/', getAllServiceProviders);
router.post('/', addServiceProvider);

module.exports = router;
