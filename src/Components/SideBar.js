
import React, { useState } from 'react';
import './SideBar.css';
import AboutUs from './AboutUs.js'
import ContactUs from './ContactUs.js'
import Banner from './Banner.js';
import Resources from './Resources.js'
import Team from './Team.js';
import ApplyToAdopt from './ApplyToAdopt.js';
import TrackUrApplication from './TrackUrApplication.js';
import MeetOthers from './MeetOthers.js';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeContent, setActiveContent] = useState('home');

  const menuItems = [
    { id: 'home', icon: '🏠', text: 'Home' },
    { id: 'profile', icon: '🐾', text: 'Pet Profiles' },
    { id:'applytoadopt',icon:'🩷',text:'Apply to Adopt'},
    { id:'trackurapplication',icon:'📈',text:'Track your application'},
    { id:'resources',icon:'📚',text:'Resources'},
    {id:'feedback',icon:'💬',text:'Feedback'},
    {id:'meetothers',icon:'🤝',text:'Meet Other Pet Parents'},
    { id: 'about', icon: '⚙️', text: 'About Us' },
    { id:'contact',icon:'☎️',text:'Contact Us'},
    {id:'team',icon:'👥',text:'Our Team'}
  ];
  const contentComponents = {
    home: (
      <div className="content-section">
        <Banner/>
      </div>
    ),
    profile: (
      <div className="content-section">
        <h1>Pet Profile</h1>
      </div>
    ),
    applytoadopt:(
      <div>
        <ApplyToAdopt/>
      </div>
    ),
    trackurapplication:(
      <div>
        <TrackUrApplication/>
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
    ),
    resources:(
      <div>
        <Resources/>
      </div>
    ),
    meetother:(
      <div>
        <MeetOthers/>
      </div>
    ),
    team:(
      <div className="content-section">
          <Team/>
      </div>
    )
  };

  const handleMenuClick = (id) => {
    setActiveContent(id);
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