import React from "react";
import "../App.css"; 

// The names here must match the order in the App.jsx panelOrder array
const PANELS = ["badges", "collection", "home", "camera", "settings"];

function BottomNavigation({ activePanelIndex, onNavClick }) {
  // Rename 'collection' to 'shoes' for the button ID
  const getButtonId = (panelName) => {
    if (panelName === "collection") {
      return "shoes";
    }
    return panelName;
  };

  return (
    <div className="bottom-navigation">
      {PANELS.map((panelName, index) => (
        <button
          key={panelName}
          // Dynamically add the 'active' class if the button's index matches the active panel index
          className={`nav-button ${activePanelIndex === index ? "active" : ""}`}
          id={`nav-button-${getButtonId(panelName)}`}
          onClick={() => onNavClick(index)}
        >
          <span className="nav-button-text">
            {/* Display "SHOES" for the 'collection' panel */}
            {panelName === 'collection' ? 'SHOES' : panelName.toUpperCase()}
          </span>
        </button>
      ))}
    </div>
  );
}

export default BottomNavigation;