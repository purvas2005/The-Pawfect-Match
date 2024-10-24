// // import React, { useState, useEffect } from 'react';
// // import Papa from 'papaparse'; // Import PapaParse to parse CSV

// // const PetProfiles = () => {
// //   const [pets, setPets] = useState([]);

// //   useEffect(() => {
// //     // Load the CSV file from the public folder
// //     fetch('/data/Adoptable_Pets.csv')
// //       .then(response => response.text())
// //       .then(csvText => {
// //         // Parse the CSV text using PapaParse
// //         Papa.parse(csvText, {
// //           header: true,
// //           complete: (results) => {
// //             setPets(results.data);  // Set the parsed data as pets state
// //           },
// //         });
// //       });
// //   }, []);

// //   return (
// //     <div className="pet-profile-grid">
// //       {pets.map((pet, index) => (
// //         <div key={index} className="pet-card">
// //           <img src={pet["URL Link"]} alt={pet["Pet name"]} className="pet-image" />
// //           <div className="pet-info">
// //             <h3>{pet["Pet name"]}</h3>
// //             <p>Breed: {pet.Breed}</p>
// //             <p>Age: {pet["Pet Age"]}</p>
// //             <p>Size: {pet["Pet Size"]}</p>
// //             <p>Color: {pet.Color}</p>
// //             <p>Sex: {pet.Sex}</p>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default PetProfiles;
// import React, { useState, useEffect } from 'react';
// import Papa from 'papaparse';

// const PetProfiles = () => {
//   const [pets, setPets] = useState([]);

//   useEffect(() => {
//     fetch('Adoptable_Pets.csv')
//       .then(response => response.text())
//       .then(csvText => {
//         Papa.parse(csvText, {
//           header: true,
//           complete: (results) => {
//             setPets(results.data);
//           },
//         });
//       });
//   }, []);

//   return (
//     <div className="pet-profile-grid">
//       {pets.map((pet, index) => (
//         <div key={index} className="pet-card">
//           <img src={pet["URL Link"]} alt={pet["Pet name"]} />
//           <div className="pet-info">
//             <h3>{pet["Pet name"]}</h3>
//             <p>Breed: {pet.Breed}</p>
//             <p>Age: {pet["Pet Age"]}</p>
//             <p>Size: {pet["Pet Size"]}</p>
//             <p>Color: {pet.Color}</p>
//             <p>Sex: {pet.Sex}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PetProfiles;
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const PetProfiles = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch('/data/Adoptable_Pets.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            setPets(results.data);
          },
        });
      });
  }, []);

  return (
    <div className="pet-profile-container">
      {pets.map((pet, index) => (
        <div key={index} className="pet-card">
          <img src={pet["URL Link"]} alt={pet["Pet name"]} className="pet-image" />
          <div className="pet-info">
            <h3>{pet["Pet name"]}</h3>
            <p><strong>Breed:</strong> {pet.Breed}</p>
            <p><strong>Age:</strong> {pet["Pet Age"]}</p>
            <p><strong>Size:</strong> {pet["Pet Size"]}</p>
            <p><strong>Color:</strong> {pet.Color}</p>
            <p><strong>Sex:</strong> {pet.Sex}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PetProfiles;
