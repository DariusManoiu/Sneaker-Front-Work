// src/components/FriendsListPanel.jsx

import React from 'react';
import '../App.css';

export default function FriendsListPanel({ show, onClose, friends }) {
  if (!show) {
    return null;
  }

  return (
    <div className="friends-overlay" onClick={onClose}>
      <div className="friends-panel" onClick={(e) => e.stopPropagation()}>
        <div className="friends-header">
          <h2>Friends</h2>
          <button className="friends-close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="friends-list">
          {friends.map((friend) => (
            <div key={friend.id} className="friend-item">
              <img src={friend.image} alt={friend.name} className="friend-image" />
              <span className="friend-name">{friend.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}