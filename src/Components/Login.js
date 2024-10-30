import React, { useState, useEffect } from 'react';
import styles from './Login.module.css';
import Tab from './HeadBar';
import axios from 'axios';

import slide1 from './Assets/slide1.jpg'; 
import slide2 from './Assets/slide2.jpg';
import slide3 from './Assets/slide3.jpg';
import slide4 from './Assets/slide4.jpg';
import slide5 from './Assets/slide5.jpg';
import slide7 from './Assets/slide7.jpg';

// Slideshow Component
const Slideshow = () => {
  const images = [slide1, slide2, slide3, slide7, slide4, slide5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState(styles['fade-in']);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass(styles['fade-out']);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeClass(styles['fade-in']);
      }, 1000); // duration for fade-out
    }, 5000); // change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles['slideshow-container']}>
      <img 
        src={images[currentImageIndex]} 
        alt={`Slide ${currentImageIndex + 1}`} 
        className={`${styles['slideshow-image']} ${fadeClass}`} 
      />
    </div>
  );
};

// Main Login Component
const Login=({ goToHomePage, goToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
            email,
            password,
        });
        if (response.data.token) {
            goToHomePage(); // Redirect to HomePage only if login is successful
        }
    } catch (err) {
        setError('Login failed. Please check your credentials.'); // Set error message on failed login
    }
};

  return (
    <div>
      <Tab />
      <div className={styles['container']}>
        <div className={styles['login-box']}>
          <h1>Welcome back</h1>
          <p>Please enter your details</p>
          <form onSubmit={handleSubmit}>
            <label>Email Address</label>
            <input 
              type="email" 
              className={styles['inputbtn']} 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />

            <label>Password</label>
            <input 
              type="password" 
              className={styles['inputbtn']} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className={styles['options']}>
            <a href="#">Forgot password?</a>
            </div>

            <button type="submit">Sign In</button>
          </form>

          <div className={styles['signin-options']}>
          <p>Don't have an account? <button onClick={goToSignUp}>Sign Up</button></p>
          </div>
        </div>
        <Slideshow />
      </div>
    </div>
  );
};
export default Login;
