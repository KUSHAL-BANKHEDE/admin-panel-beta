const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs'); // Add bcrypt import
const Admin = require('./models/Admin');
const adminRoutes = require('./routes/adminRoutes');
const customerRoutes = require('./routes/customerRoutes');
const serviceProviderRoutes = require('./routes/serviceProviderRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const chatRoutes = require('./routes/chatRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

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

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(async () => {
        console.log('MongoDB connected');

        // Create an admin user if one does not exist
        const adminExists = await Admin.findOne({ username: 'admin' });
        if (!adminExists) {
            await createAdmin('admin', 'password123'); // Replace with your desired username and password
        }

        // Start server
        const PORT = process.env.PORT || 5001;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/providers', serviceProviderRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/reviews', reviewRoutes);

