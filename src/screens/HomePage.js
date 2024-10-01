import React, { useContext, useState , useEffect} from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import './HomePage.css'
import Navbar from '../components/navbar';

const HomePage = () => {

  const [state, setState] = useState(0);

  const { logout,isAuthenticated, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state || {}; 

  useEffect(() => {
    if (data) {
      setState(1);
    }
  }, [data]);
  
  if (!isAuthenticated) {
    return <p>Please login to access the home page.</p>;
  }

  const handleClick = () => {
    logout();
  };

  const handleRecharge = () => {
    navigate('/services');
  }

  return (

    <div style={{paddingTop: "100px"}}>
      <Navbar />
        <div class="body">
          <h1>Hello, {user.username}!</h1>
            {/* Your home page content */}

            {state === 0 ? (
                <div className="account">

                <div className="balance">
                    <h3>Account Balance: Rs. 300.00</h3>
                    <button class="recharge-home-btn" onClick={handleRecharge}>Recharge</button>
                </div>
                <div className="balance">
                    <h3>Data Remaining: 1.5GB</h3>
                    <button class="recharge-home-btn">Add more</button>
                </div>
              </div>
            ) : (
                  <div className="account">

                  <div className="balance">
                      <h3>Account Balance: Rs. 224.00</h3>
                      <button class="recharge-home-btn" onClick={handleRecharge}>Recharge</button>
                  </div>
                  <div className="balance">
                      <h3>Data Remaining: 2.2GB</h3>
                      <button class="recharge-home-btn">Add more</button>
                  </div>
              </div>
            )}

         
            <div class="home-page-body">
              <img class="home-image" src="/images/home-img1.jpg"/>
              <div style={{width: '40%'}}>
                <p>
                Welcome to STL, your trusted partner in telecommunications services. We offer a seamless online platform for managing all your telecom needs, from convenient online billing and payments to activating essential services like international roaming, data plans, and personalized ring tones. With STL, topping up your account or cash balance is just a few clicks away, ensuring you're always connected. Whether you're managing your mobile plan, checking usage, or exploring new services, STL provides an easy-to-use solution for all your telecom requirements. Stay in control with STL – your gateway to efficient, hassle-free communication.
                </p>
              </div>
            </div>

        </div>
    </div>
  );
};

export default HomePage;