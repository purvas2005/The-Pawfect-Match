// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const cors = require('cors');

const User = require('./models/User'); 
const authRoutes = require('./routes/auth');// Import authentication routes

// Load environment variables from .env
dotenv.config(); 

const app = express(); // Create an instance of Express
const PORT = process.env.PORT || 5000; // Use port from environment variable or default to 5000

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
    app.use('/api/auth', authRoutes); // Adjust this line if needed
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });