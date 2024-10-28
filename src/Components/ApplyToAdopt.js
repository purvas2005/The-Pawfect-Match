import React from 'react';
import './ApplyToAdopt.css';

const ApplyToAdopt = ({ pet, onClose }) => {
  if (!pet) return null; // If pet is undefined, return null to prevent errors

  return (
    <div className="apply-to-adopt-container">
      <button className="close-button" onClick={onClose}>Close</button>
      <h2>Adopt {pet["Pet name"]}</h2>
      <p><strong>Breed:</strong> {pet.Breed}</p>
      <p><strong>Age:</strong> {pet["Pet Age"] || 'Unknown'}</p>
      <p><strong>Size:</strong> {pet["Pet Size"] || 'Unknown'}</p>
      <p><strong>Color:</strong> {pet.Color || 'Unknown'}</p>
      <p><strong>Sex:</strong> {pet.Sex || 'Unknown'}</p>
      <form>
        {/* Include adoption application form fields here */}
        <button type="submit" className="submit-button">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyToAdopt;
