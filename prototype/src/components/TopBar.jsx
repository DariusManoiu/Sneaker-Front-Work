// src/components/TopBar.jsx

import React from 'react';
import '../App.css';

// Accept both onNotificationsClick and onFriendsClick props
export default function TopBar({ onNotificationsClick, onFriendsClick }) {
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
        {/* The onClick handler now calls the onFriendsClick function */}
        <button
          className="top-icon-button"
          id="social-button"
          aria-label="Friends List"
          onClick={onFriendsClick}
        ></button>
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