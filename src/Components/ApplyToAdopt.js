import React, { useState } from 'react';
import axios from 'axios';
import './ApplyToAdopt.css';

const ApplyToAdopt = ({ pet, onClose }) => {
  // Always define the state, even if `pet` is null
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    petName: pet ? pet["Pet name"] : '', // Handle undefined pet gracefully
    petBreed: pet ? pet.Breed : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/adoption', formData);
      alert('Application submitted successfully!');
      onClose(); // Close the modal on successful submission
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit the application. Please try again.');
    }
  };

  if (!pet) return null; // Conditionally render the UI, not the hooks

  return (
    <div className="apply-to-adopt-container">
      <button className="close-button" onClick={onClose}>Close</button>
      <h2>Adopt {pet["Pet name"]}</h2>
      <p><strong>Breed:</strong> {pet.Breed}</p>
      <p><strong>Age:</strong> {pet["Pet Age"] || 'Unknown'}</p>
      <p><strong>Size:</strong> {pet["Pet Size"] || 'Unknown'}</p>
      <p><strong>Color:</strong> {pet.Color || 'Unknown'}</p>
      <p><strong>Sex:</strong> {pet.Sex || 'Unknown'}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Your Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Your Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Why do you want to adopt {pet["Pet name"]}?
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit" className="submit-button">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyToAdopt;
