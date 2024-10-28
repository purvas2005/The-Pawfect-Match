import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import Tab from './HeadBar';
import './Tab.css';
import { Link } from 'react-router-dom';

import slide1 from './Assets/slide1.jpg'; 
import slide2 from './Assets/slide2.jpg';
import slide3 from './Assets/slide3.jpg';
import slide4 from './Assets/slide4.jpg';
import slide5 from './Assets/slide5.jpg';
import slide7 from './Assets/slide7.jpg';

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
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles['slideshow-container']}>
      <img src={images[currentImageIndex]} alt="Slideshow" className={`${styles['slideshow-image']} ${fadeClass}`} />
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/HomePage');
  };

  return (
    <div>
      <Tab />
      <div className={styles['container']}>
        <div className={styles['login-box']}>
          <h1>Welcome back</h1>
          <p>Please enter your details</p><br/>
          <form onSubmit={handleSubmit}>
            <label>Email Address</label>
            <input type="email" className={styles['inputbtn']} value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label>Password</label>
            <input type="password" className={styles['inputbtn']} value={password} onChange={(e) => setPassword(e.target.value)} required />

            <br/><div className={styles['options']}>
              <a href="#">Forgot password?</a><br/>
            </div>

            <br/><button type="submit">Sign In</button><br/>
          </form>

          <div className={styles['signin-options']}>
            <p>Don't have an account? <Link to="/SignUp">Sign Up</Link></p>
          </div>
        </div>
        <Slideshow />
      </div>
    </div>
  );
};

export default Login;