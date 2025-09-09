import React from 'react';
import '../App.css'; 

export default function SignInScreen({ onSignIn }) {
  return (
    <div className="signin-container">
      <h1 className="signin-header">nSneaker</h1>

      {/* Wrap the two inputs in a div */}
      <div className="signin-inputs-container">
        <input 
          className="signin-input" 
          type="text" 
          placeholder="Username" 
        />
        <input 
          className="signin-input" 
          type="password" 
          placeholder="Password" 
        />
      </div>

      <button 
        className="signin-button" 
        onClick={onSignIn}
      >
        Sign In
      </button>
    </div>
  );
}