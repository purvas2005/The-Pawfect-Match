// import React, { useEffect, useState } from 'react';
// import './PetProfiles.css';
// import ApplyToAdopt from './ApplyToAdopt.js';

// const PetProfiles = () => {
//   const [pets, setPets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/petprofiles'); // Fetching from backend API
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json(); // Parse response as JSON
//         setPets(data); // Set pets data from MongoDB
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchPets();
//   }, []);

//   if (loading) return <div className="loading">Loading pets...</div>;
//   if (error) return <div className="error-message">Error: {error}</div>;

//   return (
//     <div className="pet-profile-container">
//       {pets.map((pet, index) => (
//         <div key={index} className="pet-card">
//           <div className="card-inner">
//             <div className="card-front">
//               <div className="image-container">
//                 <img src={pet["URL Link"]} alt={pet["Pet name"]} className="pet-image" />
//               </div>
//               <h3>{pet["Pet name"]}</h3>
//               <p>{pet.Breed}</p>
//             </div>
//             <div className="card-back">
//               <h3>{pet["Pet name"]}</h3>
//               <p><strong>Age:</strong> {pet["Pet Age"] || 'Unknown'}</p>
//               <p><strong>Size:</strong> {pet["Pet Size"] || 'Unknown'}</p>
//               <p><strong>Color:</strong> {pet.Color || 'Unknown'}</p>
//               <p><strong>Sex:</strong> {pet.Sex || 'Unknown'}</p>
//               <p><strong>Looking for a Home since:</strong> {pet["In Date"] ? new Date(pet["In Date"]).toLocaleDateString() : 'Unknown'}</p>
//               <button className="adopt-button" onclick="adoptPet()">Adopt</button> 
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PetProfiles;

// // //steps to run backend:
// // //start mongo, enable the connection
// // //then do node server.js
// // //then check http://localhost:5000/api/petprofiles to see if json is getting parsed properly
// // //then do npm start

import React, { useEffect, useState } from 'react';
import './PetProfiles.css';
import ApplyToAdopt from './ApplyToAdopt';

const PetProfiles = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPet, setSelectedPet] = useState(null); // State to store selected pet for adoption

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/petprofiles');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPets(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  // Handle Adopt Me! button click
  const handleAdoptClick = (pet) => {
    setSelectedPet(pet); // Set selected pet to open ApplyToAdopt with this pet's info
  };

  // Render loading or error messages
  if (loading) return <div className="loading">Loading pets...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  // Conditionally render ApplyToAdopt component if a pet is selected
  return (
    <div className="pet-profile-container">
      {selectedPet ? (
        <ApplyToAdopt pet={selectedPet} onClose={() => setSelectedPet(null)} />
      ) : (
        pets.map((pet, index) => (
          <div key={index} className="pet-card">
            <div className="card-inner">
              <div className="card-front">
                <div className="image-container">
                  <img src={pet["URL Link"]} alt={pet["Pet name"]} className="pet-image" />
                </div>
                <h3>{pet["Pet name"]}</h3>
                <p>{pet.Breed}</p>
              </div>
              <div className="card-back">
                <h3>{pet["Pet name"]}</h3>
                <p><strong>Age:</strong> {pet["Pet Age"] || 'Unknown'}</p>
                <p><strong>Size:</strong> {pet["Pet Size"] || 'Unknown'}</p>
                <p><strong>Color:</strong> {pet.Color || 'Unknown'}</p>
                <p><strong>Sex:</strong> {pet.Sex || 'Unknown'}</p>
                <p><strong>Looking for a Home since:</strong> {pet["In Date"] ? new Date(pet["In Date"]).toLocaleDateString() : 'Unknown'}</p>
                <button className="adopt-button" onClick={() => handleAdoptClick(pet)}>Adopt Me!</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PetProfiles;

