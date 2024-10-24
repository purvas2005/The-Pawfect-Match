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
