const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const cors = require('cors');

const User = require('./models/User'); // User model
const authRoutes = require('./routes/auth'); // Authentication routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB using mongoose
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');

    // Routes for authentication
    app.use('/api/auth', authRoutes);

    // Pet profiles route
    app.get('/api/petprofiles', async (req, res) => {
      try {
        const petProfiles = await mongoose.connection.collection('petprofiles').find().toArray();
        res.json(petProfiles);
      } catch (err) {
        console.error('Error fetching pet profiles:', err);
        res.status(500).json({ message: 'Failed to load pet profiles data' });
      }
    });

    // Pet parents route
    app.get('/api/petparents', async (req, res) => {
      try {
        const petParents = await mongoose.connection.collection('PetParents').find().toArray();
        res.json(petParents);
      } catch (err) {
        console.error('Error fetching pet parents data:', err);
        res.status(500).json({ message: 'Failed to load pet parents data' });
      }
    });

    // Define the AdoptionForm schema and model
    const adoptionFormSchema = new mongoose.Schema({
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      message: { type: String, required: true },
      petName: { type: String, required: true },
      petBreed: { type: String, required: true },
    });

    const AdoptionForm = mongoose.model('AdoptionForm', adoptionFormSchema);

    // Adoption form submission route
    app.post('/api/adoption', async (req, res) => {
      try {
        const { name, email, phone, message, petName, petBreed } = req.body;

        // Create a new adoption form entry
        const newForm = new AdoptionForm({
          name,
          email,
          phone,
          message,
          petName,
          petBreed,
        });

        // Save the form to MongoDB
        await newForm.save();
        res.status(201).json({ message: 'Adoption application submitted successfully' });
      } catch (error) {
        console.error('Error saving adoption form:', error);
        res.status(500).json({ message: 'Failed to submit application' });
      }
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
