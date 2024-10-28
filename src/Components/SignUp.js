import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css';
import Tab from './HeadBar';;
import axios from 'axios';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (password !== confirmPassword) {
          setError('Passwords do not match'); // Check if passwords match
          return;
        }
        setError('');
        navigate('/HomePage'); 
    try {
        // Send a POST request to the signup endpoint
        const response = await axios.post('http://localhost:5000/signup', {
            email,
            password,
        });
        console.log(response.data);
        // You can redirect the user to the login page or show a success message here
  
      } catch (err) {
        setError(err.response?.data?.message || 'Signup failed'); // Set error message if signup fails
      }
    };

    return (
        <div><Tab/>
        <div className={styles['container']}>
            <div className={styles['login-box']}>
                <br/><br/>
                <h1>Create Account</h1>
                <p style={{color:'#1a1125'}}>Please fill in the details below</p><br/>
                <form onSubmit={handleSubmit}>
                    <label>Email Address</label><br/>
                    <input type="email" className={styles['inputbtn']} value={email} onChange={(e) => setEmail(e.target.value)} required /><br/>

                    <label>Password</label><br/>
                    <input type="password" className={styles['inputbtn']} value={password} onChange={(e) => setPassword(e.target.value)} required /><br/>

                    <label>Confirm Password</label><br/>
                    <input type="password" className={styles['inputbtn']}value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required /><br/>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
        </div>
    );
}
export default SignUp;
