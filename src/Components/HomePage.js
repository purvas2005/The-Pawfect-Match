import Banner from './Banner.js'
import React, { useState, useEffect } from 'react';
import HeadBar from './HeadBar.js';
import Sidebar from './SideBar.js';

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000); // Show content after 5 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div >
      <HeadBar />
      <Sidebar />
      <div style={{ marginLeft: '0', transition: 'margin-left 0.3s ease-in-out' }}>
        <Banner />
        {showContent && (
          <div>
            <Banner/>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
