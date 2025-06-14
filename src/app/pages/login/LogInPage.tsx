import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { ILoginResponse } from '@/app/models/auth-models';
import { authService } from '@/app/services/api';

function LogInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    authService.login({
      email: email,
      password: password
    }).then(response => {
      console.log(response);
      const data: ILoginResponse = response.data;
      localStorage.setItem('jwtToken', data.token);
      if (data.role == 'DONOR') {
        navigate('/user-dashboard');
      } else {
        navigate('/admin-dashboard');
      }
    });
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h1>Log In</h1>
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="you@example.com" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 placeholder="Your password" required />

          <button type="submit" className="login-button">Log In</button>
        </form>

        <div className="create-account-section">
          <p>Don't have an account?</p>
          <Link to="/register" className="create-account-button">Create Account</Link>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
