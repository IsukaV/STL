import React,{useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css'; // Optional: for custom styles
import ProfileList from './profilelist'
import Notifications from './notifications';

const Navbar = () => {
    const location = useLocation();

    const menuItems = ['Profile', 'Settings', 'Logout'];

    const handleMenuItemSelect = (item) => {
        // Handle item selection logic here
        console.log('Selected item:', item);
      };

      const handleProfileClicked = () => {
        if(profileClicked==true){
            setProfileClicked(false)
        }else{
            setProfileClicked(true)
            setNotificationsClicked(false)
        }
      }

      const handleNotificationsClicked = () => {
        if(notificationsClicked == true){
            setNotificationsClicked(false)

        }else{
            setNotificationsClicked(true)
            setProfileClicked(false)
        }
      }

      const [profileClicked, setProfileClicked] = useState(false); 
      const [notificationsClicked, setNotificationsClicked] = useState(false); 

    return (
        <div>
        <nav className="navbar">
            <div className="logo">
                <img src="/images/white-logo.png" className="logo-img"/>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>Home</Link>
                </li>
                <li>
                    <Link to="/bills" className={location.pathname === '/bills' ? 'active' : ''}>Bills</Link>
                </li>
                <li>
                    <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
                </li>
                <li>
                    <div style={{position: 'relative'}}>
                        <span class="notification-icon" className="material-symbols-outlined" onClick={handleNotificationsClicked}>notifications</span>
                        <Notifications pressed={notificationsClicked}/>
                    </div>
                </li>
                <li>
                    <div style={{position: 'relative'}}>
                        <span class="profile-icon" className="material-symbols-outlined" onClick={handleProfileClicked}>account_circle</span>
                        <ProfileList pressed={profileClicked} items={menuItems} onSelect={handleMenuItemSelect} />
                    </div>
                </li>
            </ul>
        </nav>
            {/*<div class="profile-options">*/}
            {/*    <p>Hi</p>*/}
            {/*</div>*/}
        </div>
    );
};

export default Navbar