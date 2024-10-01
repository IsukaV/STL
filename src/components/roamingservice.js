import React from 'react'
import './roamingservice.css'


function Roamingservice() {
  return (
    <div style={{textAlign:'center'}}>
        <p style={{fontSize:'18px', marginBottom:'5px'}}>Roaming Voice Recharge</p>
        <div class="data-service">
            <div class="data-service-container"> <p class="data-amount">1 Hour unlimited calls</p> <p class="data-price">for LKR 54.00</p></div>
            <button class="activate-data-service-btn">Buy</button>
        </div>
        <div class="data-service">
            <div class="data-service-container"> <p class="data-amount">2 Hours unlimited calls</p> <p class="data-price">for LKR 98.00</p></div>
            <button class="activate-data-service-btn">Buy</button>
        </div>
        <div class="data-service">
            <div class="data-service-container"> <p class="data-amount">5 Hours unlimited calls</p> <p class="data-price">for LKR 146.00</p></div>
            <button class="activate-data-service-btn">Buy</button>
        </div>

        <p style={{fontSize:'18px', marginBottom:'5px'}}> Roaming  Anytime Data</p>
        <div class="data-service">
            <div class="data-service-container"> <p class="data-amount">0.7 GB</p> <p class="data-price">for LKR 96.00</p></div>
            <button class="activate-data-service-btn">Buy</button>
        </div>
        <div class="data-service">
            <div class="data-service-container"> <p class="data-amount">1 GB</p> <p class="data-price">for LKR 124.00</p></div>
            <button class="activate-data-service-btn">Buy</button>
        </div>
        <div class="data-service">
            <div class="data-service-container"> <p class="data-amount">1.5 GB</p> <p class="data-price">for LKR 160.00</p></div>
            <button class="activate-data-service-btn">Buy</button>
        </div>

        
    </div>
  )
}

export default Roamingservice;