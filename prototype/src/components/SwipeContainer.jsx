import React from "react";
import BadgesPanel from "./panels/BadgesPanel";
import CollectionPanel from "./panels/CollectionPanel";
import HomePanel from "./panels/HomePanel";
import CameraPanel from "./panels/CameraPanel";
import SettingsPanel from "./panels/SettingsPanel";

function SwipeContainer({ activePanel }) {
  return (
    <div className="swipe-container">
      <div className="swipe-wrapper">
        {activePanel === "badges" && <BadgesPanel />}
        {activePanel === "collection" && <CollectionPanel />}
        {activePanel === "home" && <HomePanel />}
        {activePanel === "camera" && <CameraPanel />}
        {activePanel === "settings" && <SettingsPanel />}
      </div>
    </div>
  );
}

export default SwipeContainer;
