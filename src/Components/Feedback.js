import React, { useState } from 'react';
import './Feedback.css';
import img from './Assets/banner_gif2.gif'
const Feedback = () => {
  const[name,setName]=useState('');
  const [email,setEmail]= useState('');
  const[rating,setRating] =useState('');
  const[comments,setComments] =useState('');
  const [submitted,setSubmitted]=useState(false);

  const didsubmit=(e)=>
    {
    e.preventDefault();
    setSubmitted(true);
    //console.log({ name, email, rating, comments });
  };
  return (
    <div className="outerdiv">
      <h1>We Value Your Feedback!</h1>
      <p>Please tell us about your experience with our pet adoption services.</p>

      {!submitted ?
      (
        <form onSubmit={didsubmit} className="form">
          <div className="formele">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          
          <div className="formele">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div className="formele">
            <label htmlFor="rating">Rating:</label>
            <select 
              id="rating" 
              value={rating} 
              onChange={(e) => setRating(e.target.value)} 
              required
            >
              <option value="">Select</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
              <option value="Poor">Poor</option>
            </select>
          </div>

          <div className="formele">
            <label htmlFor="comments">Comments:</label>
            <textarea 
              id="comments" 
              value={comments} 
              onChange={(e) => setComments(e.target.value)} 
              rows="4"
              required 
            ></textarea>
          </div>

          <button type="submit">Submit Feedback</button>
        </form>
      ) : (
        <div className="thnx">
          <h2>Thank you for your feedback!</h2>
          <p>We appreciate you taking the time to help us improve our services.</p>
          <img src={img}/>
        </div>
      )}
    </div>
  );
};

export default Feedback;
