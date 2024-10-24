import './App.css';
import Banner from './Components/Banner.js'
import React, { useState, useEffect } from 'react';
import HeadBar from './Components/HeadBar'
import Sidebar from './Components/SideBar.js'

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
    </div>
  );  
}

export default App;
