import React from 'react';
import './Team.css'; // Optional CSS file for additional styling

const Team = () => {
  return (
    <div className="team-container">
      <h1 className="team-title">Meet the Team!</h1>

      <details className="team-section">
        <summary className="team-summary">Non-Technical Team</summary>
        <ul className="team-list">
          <li>Non-Technical Member 1</li>
          <li>Non-Technical Member 2</li>
          <li>Non-Technical Member 3</li>
        </ul>
      </details>

      <details className="team-section">
        <summary className="team-summary">Technical Team</summary>
        <ul className="team-list">
          <li>Purva Parijat Sharma</li>
          <li>Rachna Ammunje Nayak</li>
          <li>Prarthana Senthil Pandian</li>
        </ul>
      </details>
    </div>
  );
};

export default Team;
