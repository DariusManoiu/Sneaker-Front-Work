import React, { useState, useEffect } from 'react';
import { shoesData, usersData, filterOptions } from '../../data'; 

export default function HomePanel() {
  const [activeFeedType, setActiveFeedType] = useState('shoe'); // 'shoe' or 'user'
  const [activeFilter, setActiveFilter] = useState('shoe_for_you');
  const [feedItems, setFeedItems] = useState([]);
  const [currentFilters, setCurrentFilters] = useState(filterOptions.shoe);

  // This effect updates the feed items whenever the active filter changes
  useEffect(() => {
    const data = activeFeedType === 'shoe' ? shoesData : usersData;
    setFeedItems(data[activeFilter] || []);
  }, [activeFilter, activeFeedType]);

  // This effect updates the dropdown options when the feed type changes (Shoe/User)
  useEffect(() => {
    setCurrentFilters(filterOptions[activeFeedType]);
    setActiveFilter(`${activeFeedType}_for_you`); // Reset to default filter
  }, [activeFeedType]);

  const handleFeedTypeToggle = (type) => {
    setActiveFeedType(type);
  };


  return (
    <div className="panel-content-wrapper discovery-panel-container">
      <div className="discovery-feed-section">
        <div className="feed-sticky-header">
          <div className="feed-header">Discover</div>
          <div className="feed-controls">
            <div className="feed-control-group">
              <button
                className={`feed-type-button ${activeFeedType === 'shoe' ? 'active' : ''}`}
                onClick={() => handleFeedTypeToggle('shoe')}
              >
                Shoes
              </button>
              <button
                className={`feed-type-button ${activeFeedType === 'user' ? 'active' : ''}`}
                onClick={() => handleFeedTypeToggle('user')}
              >
                Users
              </button>
              <select
                className="feed-filter-dropdown"
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
              >
                {currentFilters.map(option => (
                  <option key={option.value} value={option.value}>{option.text}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="discovery-feed-grid">
          {feedItems.map((item, index) => (
            <div
              key={index}
              className={`feed-item-card ${activeFeedType === 'user' ? 'user' : ''}`}
              onClick={() => alert(`Viewing ${item.name}`)}
            >
              <div className="feed-item-image" style={{ backgroundImage: `url('${item.image}')` }}></div>
              <div className="feed-item-name">{item.name}</div>
              <div className="feed-item-info">{item.info}</div>
              <button
                className="feed-action-button"
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`${item.action} for ${item.name}!`);
                }}
              >
                {item.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
