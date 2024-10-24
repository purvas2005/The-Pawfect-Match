import './App.css';
import Banner from './Banner.js'
import React, { useState, useEffect } from 'react';
import HeadBar from './HeadBar'
import Sidebar from './SideBar.js'

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <HeadBar />
      <Sidebar />
      <div style={{ marginLeft:'0', transition: 'margin-left 0.3s ease-in-out' }}>
        <Banner />
        {showContent && (
          <div>
            
          </div>
        )}
      </div>
    </div>
  );  
}

export default App;
