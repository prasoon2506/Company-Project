import React from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';


const LoginForm = () => {
  return (
    <div className="outer-container">
      <div className="login-box">
   
        <h2 className="heading">Helpdesk System</h2>

      
        <input
          type="text"
          placeholder="Username"
          className="username-input"
          required
        />

     
        <input
          type="password"
          placeholder="Password"
          className="password-input"
          required
        />

        
        <button type="submit" className="btn">
          <span className="btn-text">Sign In</span>
        </button>

        
        <Link to="/signup" className="signup">Sign Up</Link>
        <Link to="/forgot-password" className="forgot">Forgot password</Link>

      </div>
    </div>
  );
};

export default LoginForm;
