import React from "react";

function SettingsPanel() {
  return (
    <div className="swipe-panel" id="settings-panel">
      <div className="panel-content-wrapper settings-panel-container">
        <div className="settings-header">Settings</div>

        <div className="settings-group">
          <h3>General</h3>
          <div className="setting-item">
            <label htmlFor="notifications">Enable Notifications</label>
            <input type="checkbox" id="notifications" defaultChecked />
          </div>
          <div className="setting-item">
            <label htmlFor="dark_mode">Dark Mode</label>
            <input type="checkbox" id="dark_mode" defaultChecked />
          </div>
          <div className="setting-item">
            <label htmlFor="language">Language</label>
            <select id="language">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>

        <div className="settings-group">
          <h3>Account</h3>
          <div className="setting-item">
            <label id="preferences-label">Preferences</label>
          </div>
          <div className="setting-item">
            <label id="edit-profile-label">Edit Profile</label>
          </div>
          <div className="setting-item">
            <label id="change-password-label">Change Password</label>
          </div>
          <div className="setting-item">
            <label id="upgrade-subscription-label">Upgrade Subscription</label>
          </div>
          <div className="setting-item">
            <label id="log-out-label">Log Out</label>
          </div>
        </div>

        <div className="bottom-buttons-row">
          <button className="settings-button" id="settings-go-back-button">Go Back</button>
          <button className="settings-button" id="save-settings-button">Save Settings</button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;
