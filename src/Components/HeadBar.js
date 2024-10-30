import React from 'react'
import "./Tab.css"
import Login from './Login';
import Logo from './Assets/file.png';
import { useState } from 'react';
const Tab=()=>{
  const [showLogin, setShowLogin] = useState(false);
    return(
        <div className='tab'>
            <img src={Logo} alt="Logo" className="logo" />
            <h1 className="tab-title">Pawfect Match🐾🖤</h1>
            <div className="login-container">
                <button padding>Logout</button>
            </div>
            </div>
    );
};
export default Tab
