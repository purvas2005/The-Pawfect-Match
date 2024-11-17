import React, { useEffect, useState } from 'react';
import './MeetOthers.css';

const MeetOthers = () => {
  const [petParents, setPetParents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPetParents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/petparents');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPetParents(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPetParents();
  }, []);

  if (loading) return <div className="loading">Loading pet parents...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="pet-parent-container">
      {petParents.map((parent, index) => (
        <div key={parent.id} className="pet-parent-card">
          <div className="parent-card-inner">
            <div className="parent-card-front">
              <img src={parent.imageURL} alt={parent.name} className="parent-image" />
              <h3>{parent.name}</h3>
              <p><strong>Location:</strong> {parent.location}</p>
            </div>
            <div className="parent-card-back">
              <h3>{parent.name}</h3>
              <p><strong>Interests:</strong><br></br> {parent.interests}</p>
              <p><strong>Pets:</strong><br></br>  {parent.pets}</p>
              <p><strong>Email:</strong><br></br>  {parent.email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeetOthers;
