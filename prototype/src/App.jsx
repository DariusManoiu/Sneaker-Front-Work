import React, { useState, useRef } from "react";
import TopBar from "./components/TopBar";
import BottomNavigation from "./components/BottomNavigation";
import StatusMessage from "./components/StatusMessage";
import BadgesPanel from "./components/panels/BadgesPanel";
import CollectionPanel from "./components/panels/CollectionPanel";
import HomePanel from "./components/panels/HomePanel";
import CameraPanel from "./components/panels/CameraPanel";
import SettingsPanel from "./components/panels/SettingsPanel";
import SignInScreen from "./components/SignInScreen";
import NotificationsPanel from "./components/NotificationsPanel"; 
import { mockNotifications } from "./data"; // Import the notification data
import "./App.css";

function App() {
  //track if user is signed in
  const [isSignedIn, setIsSignedIn] = useState(false);
  //default to Home Panel
  const [activePanelIndex, setActivePanelIndex] = useState(2);
  const panelOrder = ["badges", "collection", "home", "camera", "settings"];
  const [showNotifications, setShowNotifications] = useState(false);

  // Refs to track swipe/drag gesture
  const dragStartRef = useRef(0);
  const dragEndRef = useRef(0);
  const isDraggingRef = useRef(false); // Tracks if the mouse button is held down

   const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleNavClick = (index) => {
    setActivePanelIndex(index);
  };

  // --- Unified Swipe/Drag Handlers ---
  const handleGestureStart = (clientX) => {
    dragEndRef.current = 0;
    dragStartRef.current = clientX;
    isDraggingRef.current = true; // For mouse dragging
  };

  const handleGestureMove = (clientX) => {
    if (!isDraggingRef.current) return; // Only move if dragging has started
    dragEndRef.current = clientX;
  };

  const handleGestureEnd = () => {
    isDraggingRef.current = false; // Stop dragging
    if (dragEndRef.current === 0) return; // Ignore simple clicks

    const swipeDistance = dragStartRef.current - dragEndRef.current;
    const swipeThreshold = 50; // Minimum distance for a swipe

    if (swipeDistance > swipeThreshold) {
      if (activePanelIndex < panelOrder.length - 1) {
        setActivePanelIndex(activePanelIndex + 1);
      }
    } else if (swipeDistance < -swipeThreshold) {
      if (activePanelIndex > 0) {
        setActivePanelIndex(activePanelIndex - 1);
      }
    }

    dragStartRef.current = 0;
    dragEndRef.current = 0;
  };


  
  return (
    <div className="app-container">
      {isSignedIn ? (
        // If signed in, show the main app interface
        <>
          {/* Pass the function to open the panel to the TopBar */}
          <TopBar onNotificationsClick={() => setShowNotifications(true)} />
          <div
            id="swipeContainer"
            className="swipe-container"
            onTouchStart={(e) => handleGestureStart(e.targetTouches[0].clientX)}
            onTouchMove={(e) => handleGestureMove(e.targetTouches[0].clientX)}
            onTouchEnd={handleGestureEnd}
            onMouseDown={(e) => handleGestureStart(e.clientX)}
            onMouseMove={(e) => handleGestureMove(e.clientX)}
            onMouseUp={handleGestureEnd}
            onMouseLeave={handleGestureEnd}
          >
            <div
              id="swipeWrapper"
              className="swipe-wrapper"
              style={{ transform: `translateX(-${activePanelIndex * (100 / panelOrder.length)}%)` }}
            >
              <div className="swipe-panel"><BadgesPanel /></div>
              <div className="swipe-panel"><CollectionPanel onNavigate={handleNavClick} /></div>
              <div className="swipe-panel"><HomePanel /></div>
              <div className="swipe-panel"><CameraPanel /></div>
              <div className="swipe-panel"><SettingsPanel /></div>
            </div>
          </div>
          <BottomNavigation
            activePanelIndex={activePanelIndex}
            onNavClick={handleNavClick}
          />
          <StatusMessage />
             {/* Render the NotificationsPanel here */}
          <NotificationsPanel
            show={showNotifications}
            onClose={() => setShowNotifications(false)}
            notifications={mockNotifications}
          />
        </>
      ) : (
        // If not signed in, show only the sign-in screen
        <SignInScreen onSignIn={handleSignIn} />
      )}
    </div>
  );
}

export default App;
