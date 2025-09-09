// src/components/panels/BadgesPanel.jsx

import React from 'react';
import { badgesData } from '../../data'; 

export default function BadgesPanel() {
  return (
    <div className="panel-content-wrapper badges-panel-container">
      <div className="badges-header">My Badges</div>
      <div className="badges-grid">
        {badgesData.map((badge, index) => (
          <div
            key={index}
            className={`badge-card ${badge.status}`}
            onClick={() => alert(`Badge: ${badge.name}\nStatus: ${badge.status.toUpperCase()}\n${badge.description}`)}
          >
            <div className="badge-icon">{badge.icon}</div>
            <div className="badge-name">{badge.name}</div>
            <div className="badge-status">{badge.status === 'earned' ? 'Earned' : 'Locked'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}