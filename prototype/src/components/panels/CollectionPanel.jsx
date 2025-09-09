import React from 'react';
import { myCollectionData } from '../../data'; 

// We accept onNavigate as a prop to communicate with App.jsx
export default function CollectionPanel({ onNavigate }) {
  
  const handleAddSneaker = () => {
    // Call the navigation function passed from App.jsx with the camera panel's index (3)
    if (onNavigate) {
      onNavigate(3);
    }
  };

  return (
    <div className="panel-content-wrapper collection-panel-container">
      <div className="collection-header">My Collection</div>
      <div className="filter-sort-buttons">
        <button className="filter-sort-button" onClick={() => alert('Filtering Collection!')}>Filter</button>
        <button className="filter-sort-button" onClick={() => alert('Sorting Collection!')}>Sort</button>
      </div>
      <div className="collection-items-grid">
        {myCollectionData.map((item, index) => (
          <div 
            key={index} 
            className="collection-item-card"
            onClick={() => alert(`Viewing My Item: ${item.name}`)}
          >
            <div className="collection-item-image" style={{ backgroundImage: `url('${item.image}')` }}></div>
            <div className="item-name">{item.name}</div>
            <div className="item-info">{item.info}</div>
          </div>
        ))}
      </div>
      <div className="collection-stat-box">Total: <strong>30 Pairs of Jordans</strong></div>
      <button className="add-sneaker-button" onClick={handleAddSneaker}>Add New Sneaker</button>
    </div>
  );
}