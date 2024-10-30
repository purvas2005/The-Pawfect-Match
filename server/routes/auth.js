const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const User = require('../models/User');

const router = express.Router();
const csvFilePath = path.join(__dirname, '../data/users.csv'); // Path to your CSV file

// Sign Up Route
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();

    // Append user data to CSV file
    fs.appendFile(csvFilePath, `${email},${hashedPassword}\n`, (err) => {
      if (err) {
        console.error('Error writing to CSV file:', err);
        return res.status(500).json({ message: 'User created but error saving to CSV' });
      }
      console.log(`User saved to CSV: ${email}`);
    });

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error creating user', error: err.message });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Login failed. Please check your credentials.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Login failed. Please check your credentials.' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
});

module.exports = router;
