import React, { useState } from 'react';
import './ForgotPassword.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    alert('Password reset link sent to ' + email);
  };

  return (
    <div className="forgot-password-bg">
      <div className="forgot-password-container">
        <p className="forgot-password-instructions">
          Don't worry, Enter your email below and we will<br />
          send you a link to change password.
        </p>
        <form className="forgot-password-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="forgot-password-input"
            required
          />
          <button type="submit" className="forgot-password-submit">Submit</button>
        </form>
        <button className="forgot-password-signin" onClick={() => navigate('/')}>Sign In</button>
      </div>
    </div>
  );
};

export default ForgotPassword; 