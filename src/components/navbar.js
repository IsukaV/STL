import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css'; // Optional: for custom styles

const Navbar = () => {
    const location = useLocation();
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
                    <span class="notification-icon" className="material-symbols-outlined">notifications</span>
                </li>
                <li>
                    <span class="profile-icon" className="material-symbols-outlined">account_circle</span>
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