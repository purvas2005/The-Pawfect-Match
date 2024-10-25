// // const express = require('express');
// // const { MongoClient } = require('mongodb');

// // const app = express();
// // const url = 'mongodb://localhost:27017';
// // const dbName = 'PawfectMatch';

// // let db;

// // MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
// //   if (err) {
// //     console.error('Failed to connect to the database', err);
// //     return;
// //   }
// //   db = client.db(dbName);
// //   console.log('Connected to MongoDB');
// // });

// // // Middleware to parse JSON
// // app.use(express.json());

// // // Routes
// // app.get('/api/petprofiles', async (req, res) => {
// //   try {
// //     const petsCollection = db.collection('AdoptablePets');
// //     const pets = await petsCollection.find().toArray();
// //     res.json(pets);
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // });

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const express = require('express');
// const { MongoClient } = require('mongodb');

// const app = express();
// const url = 'mongodb://localhost:27017'; // MongoDB connection string
// const dbName = 'PawfectMatch'; // Your database name

// let db;

// // Middleware to parse JSON
// app.use(express.json());

// // MongoDB connection function
// const connectDB = async () => {
//   try {
//     const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
//     db = client.db(dbName);
//     console.log('Connected to MongoDB');
//   } catch (err) {
//     console.error('Failed to connect to the database', err);
//   }
// };

// // Call the MongoDB connection function
// connectDB();

// // Routes
// app.get('/api/petprofiles', async (req, res) => {
//   try {
//     if (!db) {
//       return res.status(500).json({ message: 'Database not initialized' });
//     }

//     const petsCollection = db.collection('AdoptablePets'); // Access the correct collection
//     const pets = await petsCollection.find().toArray(); // Fetch all the pets
//     res.json(pets); // Send the data to the frontend
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err.message });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors'); // Import CORS package

const app = express();
const url = 'mongodb://localhost:27017'; // MongoDB connection string
const dbName = 'PawfectMatch'; // Your database name

let db;

// Middleware to parse JSON
app.use(express.json());
app.use(cors()); // Use CORS middleware to allow cross-origin requests

// MongoDB connection function
const connectDB = async () => {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    db = client.db(dbName);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to the database', err);
  }
};

// Call the MongoDB connection function
connectDB();

// Routes
app.get('/api/petprofiles', async (req, res) => {
  try {
    if (!db) {
      return res.status(500).json({ message: 'Database not initialized' });
    }

    const petsCollection = db.collection('AdoptablePets'); // Access the correct collection
    const pets = await petsCollection.find().toArray(); // Fetch all the pets

    // Check if the response is valid
    console.log(pets); // Log the pets data to verify it's correct

    res.json(pets); // Send the data to the frontend
  } catch (err) {
    console.error('Error fetching pet profiles:', err);
    res.status(500).json({ message: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
