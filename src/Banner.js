import './App.css'
import bannerImg from './banner_img2.jpg';
import video1 from "./banner_gif.gif";
import React, { useState, useEffect } from 'react'; 
const Banner = () => {
const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false); 
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`banner ${visible ? 'fade-in' : 'fade-out'}`}>
      <div
        style={{
          backgroundImage: `url(${bannerImg})`,
          height: '150px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      <h2 className="banner_h2">Welcome to Pawfect Match!</h2>
      <video src={video1}/> 
    </div>
    </div>
  );
};

export default Banner;
