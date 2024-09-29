import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Signup.css'

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('ajlksdf');
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
      
      <h3>Signup</h3>
      <div class="textbox-container">
        <label class="textbox-label">First Name</label>
        <input type="text" placeholder="Enter First Name" class="TextBox"/>
      </div>
      <div class="textbox-container">
        <label class="textbox-label">Last Name</label>
        <input type="text" placeholder="Enter Last Name" class="TextBox"/>
      </div>
      <div class="textbox-container">
        <label class="textbox-label">Phone</label>
        <input type="text" placeholder="Enter Phone" class="TextBox"/>
      </div>
      <div class="textbox-container">
        <label class="textbox-label">Email</label>
        <input type="email" placeholder="Enter Email" class="TextBox"/>
      </div>
      <div class="textbox-container">
        <label class="textbox-label">Password</label>
        <input type="password" placeholder="Enter Password" class="TextBox"/>
      </div>
      <div class="textbox-container">
        <label class="textbox-label">Confirm Password</label>
        <input type="password" placeholder="Enter Password" class="TextBox"/>
      </div>

      {/* <p class="signup-txt">Don't have an account? <span class="signup-link">Sign-up</span></p> */}
      <button type="submit" class="login-btn">Sign Up</button>
    </form>
  
    </div>
  );
};

export default LoginForm;