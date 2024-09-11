const Customer = require('../models/Customer');

// Get all customers
const getAllCustomers = async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
};

// Add a customer
const addCustomer = async (req, res) => {
  const newCustomer = new Customer(req.body);
  await newCustomer.save();
  res.json(newCustomer);
};

module.exports = { getAllCustomers, addCustomer };
