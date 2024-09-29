import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Login.css'

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('John');
  const [password, setPassword] = useState('asdfsadf');
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your authentication logic here (e.g., API call)
    login({ username, password });
    navigate('/home');
  };

  return (
    <div class="login-container">
      <img src="/images/STL-logo.png" id="logo-img"/>
    <form onSubmit={handleSubmit}>
      {/* Your login form inputs */}
      
      <h1>Welcome Back!</h1>
      <div class="textbox-container">
        <label class="textbox-label">Phone</label>
        <input type="text" placeholder="Enter Phone" class="TextBox"/>
      </div>
      <div class="textbox-container">
        <label class="textbox-label">Password</label>
      <input type="password" placeholder="Enter Password" class="TextBox"/>
      </div>
      <button type="submit" class="login-btn">Login</button>
    </form>
    <p class="signup-txt">Don't have an account? <span class="signup-link" onClick={() => {navigate('/signUp');}}>Sign-up</span></p>
    </div>
  );
};

export default LoginForm;