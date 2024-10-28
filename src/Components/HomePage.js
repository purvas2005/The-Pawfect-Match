import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import Tab from './HeadBar';
import Sidebar from './SideBar';
// import Slideshow from './Login';

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000); // Show content after 5 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div>
      <Tab />
      <Sidebar />
      <Banner />
      {/* {showContent && (
        // <div>
        //   <Slideshow />
        // </div>
      )} */}
    </div>
  );
};

export default HomePage;
