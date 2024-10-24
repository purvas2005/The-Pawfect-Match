import React from 'react'
import "./Tab.css"
import Logo from './logo_banner.jpeg';
const Tab=()=>{
    return(
        <div className='tab'>
            <img src={Logo} alt="Logo" className="logo" />
            <h1 className="tab-title">Pawfect Match</h1>
            <div className="loginlogo"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height="20px" width="20px">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
</div>

            </div>
    );
};
export default Tab