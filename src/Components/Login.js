import React, { useState, useEffect } from 'react';
import styles from './Login.module.css';
import Tab from './Tab.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

import slide1 from './Assets/slide1.jpg'; 
import slide2 from './Assets/slide2.jpg';
import slide3 from './Assets/slide3.jpg';
import slide4 from './Assets/slide4.jpg';
import slide5 from './Assets/slide5.jpg';
import slide7 from './Assets/slide7.jpg';

const Slideshow = () => {
  const images = [slide1, slide2, slide3,slide7, slide4,slide5];
  const [currentImageIndex, setCurrentImageIndex]= React.useState(0);
  const [fadeClass, setfadeClass]= React.useState(styles['fade-in'])

  React.useEffect(() => {
    const interval = setInterval(() => {
      setfadeClass(styles['fade-out']);

      setTimeout(()=>{
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setfadeClass(styles['fade-in']);
      },1000);
      },5000)

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
  <div className={styles['slideshow-container']}>
      <img src={images[currentImageIndex]} alt="Slideshow" className={`${styles['slideshow-image']} ${fadeClass}`} />
    </div>
  );
};

const Login=()=>
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      // Send a POST request to the login endpoint
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      // Handle successful login (e.g., store token, redirect user)
      console.log(response.data);
      // You can redirect the user or store the token in localStorage/sessionStorage here

    } catch (err) {
      setError(err.response?.data?.message || 'Login failed'); // Set error message if login fails
    }
  };

    return(
      <div>
        <Tab/>
      <div className={styles['container']}>
        <div className={styles['login-box']}>
          <br/><br/>
          <h1>Welcome back</h1>
          <p style={{color:'#1a1125'}}>Please enter your details</p><br/>
          <form onSubmit={handleSubmit}>
            <label>Email Address</label><br/>
            <input type="email" className={styles['inputbtn']} value={email} onChange={(e) => setEmail(e.target.value)} required /><br/>

            <label>Password</label><br/>
            <input type="password" className={styles['inputbtn']} value={password} onChange={(e) => setPassword(e.target.value)} required /><br/>

            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

            <div className={styles['options']}>
              <a href="#">Forgot password?</a>
            </div><br/>

            <button type="submit">Sign In</button>
          </form>

          <div className={styles['signin-options']}>
          <p>Don't have an account? <Link to="/SignUp">Sign Up</Link></p>
          </div>
        </div>
        <Slideshow/>
      </div>
      </div>
    );
}
export default Login;