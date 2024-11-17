import bannerImg from './Assets/banner_img2.jpg';
import video1 from './Assets/banner_gif.gif';
import React, { useState, useEffect } from 'react';
import Login from './Login.js';
import bgimg from './Assets/bgimg.png'

const Banner = () => {
  const [visible, setVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={`banner ${visible ? 'fade-in' : 'fade-out'}`}>
        <div
          style={{
            backgroundImage: `url(${bannerImg})`,
            height: '100px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            justifyItems: 'center',
            width: '100%'
          }}
        >
          {/* <h2 className="banner_h2">Welcome to Pawfect Match!</h2>
          <video src={video1} /> */}
        </div>
      </div>
      <div>
        <h1 className="title" style={{fontSize: 50,color:'#7d3eb4',textDecoration: 'underline'}}>Welcome to Pawfect Match!</h1>
        <br/>
        <h3 style={{fontSize:25}}>
          We are your one-stop destination for everything pet-related! Whether you are looking to adopt or are a seasoned foster parent, we offer services of interest to all!
        </h3>
        <img src={bgimg} style={{
    alignItems: 'center',
    boxShadow: 'none',
    border: 'none',
  }} />
      </div>
    </div>
  );
};

export default Banner;
