import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './profilelist.css'

function ProfileList({pressed, items, onSelect }) {
    const { logout,isAuthenticated, user } = useContext(AuthContext);
    const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    if(item=="Logout"){
        logout();
        navigate('/login');
    }
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-menu" style={{ display: pressed ? 'block' : 'none' }}>
      
        {items.map((item, index) => (
          <button key={index} onClick={() => handleItemClick(item)}>
            {item}
          </button>
        ))}
      
    </div>
  );
}

export default ProfileList;