import React from 'react';
import '../App.css';

export default function NotificationsPanel({ show, onClose, notifications }) {
  // If the 'show' prop is false, the component renders nothing.
  if (!show) {
    return null;
  }

  return (
    // The semi-transparent overlay. Clicking it closes the panel.
    <div className="notifications-overlay" onClick={onClose}>
      {/* This stops clicks inside the panel from closing it */}
      <div className="notifications-panel" onClick={(e) => e.stopPropagation()}>
        <div className="notifications-header">
          <h2>Notifications</h2>
          <button className="notifications-close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="notifications-list">
          {notifications.map((notification) => (
            <div key={notification.id} className="notification-item">
              <p className="notification-text">{notification.text}</p>
              <span className="notification-time">{notification.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}