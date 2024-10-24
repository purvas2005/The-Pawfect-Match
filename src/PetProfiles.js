// // // // import React, { useState, useEffect } from 'react';
// // // // import Papa from 'papaparse'; // Import PapaParse to parse CSV

// // // // const PetProfiles = () => {
// // // //   const [pets, setPets] = useState([]);

// // // //   useEffect(() => {
// // // //     // Load the CSV file from the public folder
// // // //     fetch('/data/Adoptable_Pets.csv')
// // // //       .then(response => response.text())
// // // //       .then(csvText => {
// // // //         // Parse the CSV text using PapaParse
// // // //         Papa.parse(csvText, {
// // // //           header: true,
// // // //           complete: (results) => {
// // // //             setPets(results.data);  // Set the parsed data as pets state
// // // //           },
// // // //         });
// // // //       });
// // // //   }, []);

// // // //   return (
// // // //     <div className="pet-profile-grid">
// // // //       {pets.map((pet, index) => (
// // // //         <div key={index} className="pet-card">
// // // //           <img src={pet["URL Link"]} alt={pet["Pet name"]} className="pet-image" />
// // // //           <div className="pet-info">
// // // //             <h3>{pet["Pet name"]}</h3>
// // // //             <p>Breed: {pet.Breed}</p>
// // // //             <p>Age: {pet["Pet Age"]}</p>
// // // //             <p>Size: {pet["Pet Size"]}</p>
// // // //             <p>Color: {pet.Color}</p>
// // // //             <p>Sex: {pet.Sex}</p>
// // // //           </div>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PetProfiles;
// // // import React, { useState, useEffect } from 'react';
// // // import Papa from 'papaparse';

// // // const PetProfiles = () => {
// // //   const [pets, setPets] = useState([]);

// // //   useEffect(() => {
// // //     fetch('Adoptable_Pets.csv')
// // //       .then(response => response.text())
// // //       .then(csvText => {
// // //         Papa.parse(csvText, {
// // //           header: true,
// // //           complete: (results) => {
// // //             setPets(results.data);
// // //           },
// // //         });
// // //       });
// // //   }, []);

// // //   return (
// // //     <div className="pet-profile-grid">
// // //       {pets.map((pet, index) => (
// // //         <div key={index} className="pet-card">
// // //           <img src={pet["URL Link"]} alt={pet["Pet name"]} />
// // //           <div className="pet-info">
// // //             <h3>{pet["Pet name"]}</h3>
// // //             <p>Breed: {pet.Breed}</p>
// // //             <p>Age: {pet["Pet Age"]}</p>
// // //             <p>Size: {pet["Pet Size"]}</p>
// // //             <p>Color: {pet.Color}</p>
// // //             <p>Sex: {pet.Sex}</p>
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default PetProfiles;
// // import React, { useState, useEffect } from 'react';
// // import Papa from 'papaparse';
// // import './PetProfiles.css';

// // const PetProfiles = () => {
// //   const [pets, setPets] = useState([]);

// //   useEffect(() => {
// //     fetch('/data/Adoptable_Pets.csv')
// //       .then(response => response.text())
// //       .then(csvText => {
// //         Papa.parse(csvText, {
// //           header: true,
// //           complete: (results) => {
// //             setPets(results.data);
// //           },
// //         });
// //       });
// //   }, []);

// //   return (
// //     <div className="pet-profile-container">
// //       {pets.map((pet, index) => (
// //         <div key={index} className="pet-card">
// //           <img src={pet["URL Link"]} alt={pet["Pet name"]} className="pet-image" />
// //           <div className="pet-info">
// //             <h3>{pet["Pet name"]}</h3>
// //             <p><strong>Breed:</strong> {pet.Breed}</p>
// //             <p><strong>Age:</strong> {pet["Pet Age"]}</p>
// //             <p><strong>Size:</strong> {pet["Pet Size"]}</p>
// //             <p><strong>Color:</strong> {pet.Color}</p>
// //             <p><strong>Sex:</strong> {pet.Sex}</p>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default PetProfiles;

// import React, { useEffect, useState } from 'react';
// import Papa from 'papaparse'; // Ensure you have PapaParse installed
// import './PetProfiles.css'; // Create this file for styles


// const PetProfiles = () => {
//   const [pets, setPets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         const response = await fetch('/Adoptable_Pets.csv');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const csvText = await response.text();
//         Papa.parse(csvText, {
//           header: true,
//           complete: (results) => {
//             // setPets(results.data);
//             console.log(results.data); // Log the parsed data to inspect it
//             const filteredData = results.data.filter(pet => pet["Pet name"]); // Filter out empty entries
//             setPets(filteredData);
//             setLoading(false);
//           },
//         });
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchPets();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="pet-profile-container">
//       {pets.map((pet, index) => (
//         <div key={index} className="pet-card">
//           <img src={pet["URL Link"]} alt={pet["Pet name"]} className="pet-image" />
//           <div className="pet-info">
//             <h3>{pet["Pet name"]}</h3>
//             <p><strong>Breed:</strong> {pet.Breed}</p>
//             <p><strong>Age:</strong> {pet["Pet Age"]}</p>
//             {/* <p><strong>Size:</strong> {pet["Pet Size"]}</p>
//             <p><strong>Color:</strong> {pet.Color}</p>
//             <p><strong>Sex:</strong> {pet.Sex}</p>
//             <p><strong>Intake Type:</strong> {pet["Intake Type"]}</p>
//             <p><strong>In Date:</strong> {pet["In Date"]}</p>*/}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PetProfiles;
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './PetProfiles.css';

const PetProfiles = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('/Adoptable_Pets.csv');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const csvText = await response.text();
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const filteredData = results.data.filter(pet => pet["Pet name"]);
            setPets(filteredData);
            setLoading(false);
          },
        });
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="pet-profile-container">
      {pets.map((pet, index) => (
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
              <p><strong>Age:</strong> {pet["Pet Age"]}</p>
              <p><strong>Size:</strong> {pet["Pet Size"]}</p>
              <p><strong>Color:</strong> {pet.Color}</p>
              <p><strong>Sex:</strong> {pet.Sex}</p>
              <p><strong>Looking for a Home since:</strong> {pet["In Date"]}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PetProfiles;
