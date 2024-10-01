import React from 'react'
import { useNavigate } from 'react-router-dom';
import './dataservice.css'


function Dataservice() {
    const navigate = useNavigate();

    const handleActivate = () =>{
        alert('Package activated');
        const data = { status: 1};
      
        navigate('/home', { state: { data } });
    }
  return (
    <div style={{textAlign:'center'}}>
        <p style={{fontSize:'18px', marginBottom:'5px'}}>Anytime Data</p>
        <div class="data-service">
            <div class="data-service-container"> <p class="data-amount">0.7 GB</p> <p class="data-price">for LKR 76.00</p></div>
            <button class="activate-data-service-btn" onClick={handleActivate}>Activate</button>
        </div>
        <div class="data-service">
            <div class="data-service-container"> <p class="data-amount">1 GB</p> <p class="data-price">for LKR 100.00</p></div>
            <button class="activate-data-service-btn">Activate</button>
        </div>
        <div class="data-service">
            <div class="data-service-container"> <p class="data-amount">1.5 GB</p> <p class="data-price">for LKR 145.00</p></div>
            <button class="activate-data-service-btn">Activate</button>
        </div>

        <p style={{fontSize:'18px', marginBottom:'5px'}}>Time Based</p>
        <div class="data-service">
            <div class="data-service-container"> <p class="data-amount">1 Hour</p> <p class="data-price">for LKR 22.00</p></div>
            <button class="activate-data-service-btn">Activate</button>
        </div>
        <div class="data-service">
            <div class="data-service-container"> <p class="data-amount">2 Hours</p> <p class="data-price">for LKR 40.00</p></div>
            <button class="activate-data-service-btn">Activate</button>
        </div>
        <div class="data-service">
            <div class="data-service-container"> <p class="data-amount">5 Hours</p> <p class="data-price">for LKR 98.00</p></div>
            <button class="activate-data-service-btn">Activate</button>
        </div>
    </div>
  )
}

export default Dataservice;