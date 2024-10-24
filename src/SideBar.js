
import React, { useState } from 'react';
import './SideBar.css';
import AboutUs from './AboutUs.js'
import ContactUs from './ContactUs.js'
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeContent, setActiveContent] = useState('home');

  const menuItems = [
    { id: 'home', icon: '🏠', text: 'Home' },
    { id: 'profile', icon: '👤', text: 'Profile' },
    { id: 'about', icon: '⚙️', text: 'About Us' },
    { id:'contact',icon:'A',text:'Contact Us'}
  ];

  // Content components for each menu item
  const contentComponents = {
    home: (
      <div className="content-section">
        <h1>Home</h1>
        <p>Welcome to our awesome application! This is the home page content.</p>
      </div>
    ),
    profile: (
      <div className="content-section">
        <h1>Profile</h1>
        <p>This is your profile page. Here you can view and edit your information.</p>
      </div>
    ),
    about: (
      <div className="content-section">
        <AboutUs/>
      </div>
    ),
    contact:(
      <div className="content-section">
          <ContactUs/>
      </div>
    )
  };

  const handleMenuClick = (id) => {
    setActiveContent(id);
    // On mobile, close the sidebar after selection
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <div className="app-container">
      <button
        className={`toggle-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✖️' : '☰'}
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="nav-menu">
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-item ${activeContent === item.id ? 'active' : ''}`}
                  onClick={() => handleMenuClick(item.id)}
                >
                  <span className="icon">{item.icon}</span>
                  <span className="text">{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <main className={`main-content ${isOpen ? 'shifted' : ''}`}>
        {contentComponents[activeContent]}
      </main>
    </div>
  );
};

export default Sidebar;