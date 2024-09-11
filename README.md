# Admin Panel

## Overview

This project is an admin panel application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes features for service management, booking and review management, and customer chat and notifications.

## Features

- **Service Management**: Add and modify services with pricing, categories, and subcategories.
- **Booking & Review Management**: View the history of payments from customers, and edit or delete service provider reviews.
- **Customer Chat & Notifications**: View customer chat history, send notifications to users and service providers.

## Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Backend Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repo/admin-panel.git
   cd admin-panel/backend
Install the necessary dependencies:

bash
Copy code
npm install
Create a .env file in the frontend directory with the following content:

plaintext
Copy code
REACT_APP_API_URL=http://localhost:5001/api
Replace http://localhost:5001/api with the URL where your backend API is hosted.

Start the React development server:

bash
Copy code
npm start
The frontend application will be available at http://localhost:3000.

Backend
Navigate to the backend directory:

bash
Copy code
cd backend
Install the necessary dependencies:

bash
Copy code
npm install
Create a .env file in the backend directory with the following content:

plaintext
Copy code
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Replace your_mongodb_connection_string with your MongoDB connection string and your_jwt_secret with a secret key for JWT.

Start the Node.js server:

bash
Copy code
npm start
The backend server will be available at http://localhost:5001.

Admin User Credentials
For testing purposes, an admin user is pre-configured in the database:

Username: admin
Password: password123
API Endpoints
Admin Routes
POST /api/admin/login - Login with admin credentials and receive a JWT token.
Customer Routes
GET /api/customers - Retrieve a list of customers.
Service Provider Routes
GET /api/providers - Retrieve a list of service providers.
Booking Routes
GET /api/bookings - Retrieve a list of bookings.
Review Routes
GET /api/reviews - Retrieve a list of reviews.
DELETE /api/reviews/:id - Delete a review by ID.
Contributing
Feel free to open issues or submit pull requests. Ensure that your code adheres to the project's coding standards and passes all tests before submitting a pull request.


