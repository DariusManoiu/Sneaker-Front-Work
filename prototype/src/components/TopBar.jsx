import React from 'react';
import '../App.css';

// Accept the onNotificationsClick prop from App.jsx
export default function TopBar({ onNotificationsClick }) {
  return (
    <div className="top-bar">
      <div className="user-info">
        <div className="welcome-message-box">
          <div className="user-profile-picture"></div>
          <div className="welcome-label">
            Welcome back,<br /><span>SneakerHead481</span>
          </div>
        </div>
      </div>
      <div className="top-right-buttons-group">
        <button className="top-icon-button" id="social-button" aria-label="Social Feed"></button>
        {/* The onClick handler now calls the function from props */}
        <button
          className="top-icon-button"
          id="notifications-button"
          aria-label="Notifications"
          onClick={onNotificationsClick}
        >
          <span className="notification-badge">3</span>
        </button>
      </div>
    </div>
  );
}
