import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Login.css'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your authentication logic here (e.g., API call)
    login({ username, password });
  };

  return (
    <div class="login-container">
    <form onSubmit={handleSubmit}>
      {/* Your login form inputs */}
      <img src="/images/STL-logo.png" class="logo-img"/>
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
    </div>
  );
};

export default LoginForm;