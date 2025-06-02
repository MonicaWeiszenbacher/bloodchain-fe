import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LogInPage() {
  const navigate = useNavigate();

  const handleUserLogin = () => {
    navigate('/user-dashboard');
  };

  const handleAdminLogin = () => {
    navigate('/admin-dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h1>Log In</h1>
        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="you@example.com" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Your password" required />

          <button type="submit" className="login-button">Log In</button>
        </form>

        <div className="create-account-section">
          <p>Don't have an account?</p>
          <Link to="/register" className="create-account-button">Create Account</Link>
        </div>

        <div className="login-buttons-container">
          <button onClick={handleUserLogin} className="login-role-button">Continue as User</button>
          <button onClick={handleAdminLogin} className="login-role-button">Continue as Admin</button>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
