const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('../models/Admin'); // Adjust the path based on your directory structure
const bcrypt = require('bcryptjs');

dotenv.config();

// Function to create a new admin user
const createAdmin = async (username, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({ username, password: hashedPassword });
    await admin.save();
    console.log('Admin user created successfully');
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
};

// Connect to MongoDB and create admin user
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    return createAdmin('admin', 'password123'); // Replace with your desired username and password
  })
  .catch((err) => console.error('MongoDB connection error:', err))
  .finally(() => mongoose.disconnect());
