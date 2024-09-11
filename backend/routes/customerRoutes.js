const express = require('express');
const { getAllCustomers, addCustomer } = require('../controllers/customerController');
const router = express.Router();

router.get('/', getAllCustomers);
router.post('/', addCustomer);

module.exports = router;
