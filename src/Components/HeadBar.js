import React from 'react'
import "./Tab.css"
import Logo from './Assets/logo_banner.jpeg';
const Tab=()=>{
    return(
        <div className='tab'>
            <img src={Logo} alt="Logo" className="logo" />
            <h1 className="tab-title">Pawfect Match</h1>
            </div>
    );
};
export default Tab