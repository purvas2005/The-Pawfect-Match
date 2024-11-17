import React from 'react';
import './Team.css'; // Ensure this file contains styles for the class names used below

const Team = () => {
  return (
    <div className="team-container">
      {/* Title Section */}
      <h1 className="team-title" style={{fontSize:50, color: '#7d3eb4'}}>Meet the Team!</h1>
      <br></br>
      {/* Non-Technical Team Section */}
      <details className="team-section">
        <summary className="team-summary">Non-Technical Team</summary>
        <ul className="team-list">
          <li className="team-member">Purva Parijat Sharma</li>
          <li className="team-member">Rachna Ammunje Nayak</li>
          <li className="team-member">Prarthana Senthil Pandian</li>
        </ul>
      </details>

      {/* Technical Team Section */}
      <details className="team-section">
        <summary className="team-summary">Technical Team</summary>
        <ul className="team-list">
          <li className="team-member">Purva Parijat Sharma</li>
          <li className="team-member">Rachna Ammunje Nayak</li>
          <li className="team-member">Prarthana Senthil Pandian</li>
        </ul>
      </details>
    </div>
  );
};

export default Team;
