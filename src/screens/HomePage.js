import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './HomePage.css'
import Navbar from '../components/navbar';

const HomePage = () => {

  const { logout,isAuthenticated, user } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <p>Please login to access the home page.</p>;
  }

  const handleClick = () => {
    logout();
  };

  return (

    <div>
      <Navbar />
        <div class="body">
          <h1>Welcome, {user.username}!</h1>
            {/* Your home page content */}
            <div className="account">
                <div className="balance">
                    <h3>Account Balance: Rs. 300.00</h3>
                </div>
                <div className="balance">
                    <h3>Data Remaining: 1.5GB</h3>
                </div>
            </div>
            <button onClick={handleClick}>Logout</button>

        </div>
    </div>
  );
};

export default HomePage;