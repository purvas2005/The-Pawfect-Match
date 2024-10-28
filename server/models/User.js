// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensures no duplicate email addresses
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema); // Create a model from the schema
module.exports = User; // Export the model
