import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './HomePage.css'

const HomePage = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <p>Please login to access the home page.</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      {/* Your home page content */}
    </div>
  );
};

export default HomePage;