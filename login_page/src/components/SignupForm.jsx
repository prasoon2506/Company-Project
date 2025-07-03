import React from 'react';
import { Link } from 'react-router-dom';
import './SignupFrom.css'; // Make sure your styles are in this file

const SignupForm = () => {
  return (
    <div className="signup-page">
      <div className="signup-box">
        <h1 className="title">Helpdesk System</h1>
        <p className="subtitle">Sign up here</p>

        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />

        <button className="signup-button">Sign Up</button>

        <div className="links">
          <Link to="/forgot-password" className="forgot">Forgot password</Link>
          <Link to="/" className="signin">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
