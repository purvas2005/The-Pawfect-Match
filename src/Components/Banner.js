import bannerImg from './Assets/banner_img2.jpg';
import video1 from './Assets/banner_gif.gif';
import React, { useState, useEffect } from 'react';
import Login from './Login.js';
import gif1 from './Assets/banner_gif.gif'

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
            height: '150px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            justifyItems: 'center',
          }}
        >
          <h2 className="banner_h2">Welcome to Pawfect Match!</h2>
          <video src={video1} />
        </div>
      </div>
      <div>
        <br/>
        <br/>
        <img height="100px" width="100px" src={gif1} style={{alignItems:'center'}}/>
        <h1>Welcome to Pawfect Match!</h1>
        <p>
          We are your one-stop destination for everything pet-related! Whether you are looking to adopt or are a seasoned foster parent, we offer services of interest to all!
        </p>
      </div>
      <button onClick={openModal}>Click Here for a more seamless experience!</button>

      {isModalOpen && (
        <dialog open className="modal">
          <button onClick={closeModal} className="modal-close-btn">
            Close
          </button>
          <p>Would you like to login for a more seamless experience?</p>
          <button onClick={Login}>Login</button>
        </dialog>
      )}
    </div>
  );
};

export default Banner;
