import React from 'react'
import './valueaddedservice.css'


function ValueAddedservice() {
  return (
    <div style={{textAlign:'center'}}>
        <p style={{fontSize:'18px', marginBottom:'5px'}}>Unlimited Social Media</p>
        <div class="data-service">
            <div class="data-service-container"> <p class="data-amount">Facebook</p> <p class="data-price">(1 month) for LKR 76.00</p></div>
            <button class="activate-data-service-btn">Activate</button>
        </div>
        <div class="data-service">
            <div class="data-service-container"> <p class="data-amount">Instagram + Youtube</p> <p class="data-price">(1 month) for LKR 100.00</p></div>
            <button class="activate-data-service-btn">Activate</button>
        </div>
        <div class="data-service">
            <div class="data-service-container"> <p class="data-amount">Spotify + Netflix</p> <p class="data-price">(1 month) for LKR 145.00</p></div>
            <button class="activate-data-service-btn">Activate</button>
        </div>

        <p style={{fontSize:'18px', marginBottom:'5px'}}>Combo</p>
        <div class="data-service">
            <div class="data-service-container"> <p class="data-amount">SMS + Voice</p> <p class="data-price">(3 days UNLIMITED) for LKR 150.00</p></div>
            <button class="activate-data-service-btn">Activate</button>
        </div>
        <div class="data-service">
            <div class="data-service-container"> <p class="data-amount">SMS + Voice</p> <p class="data-price">(7 days UNLIMITED) for LKR 300.00</p></div>
            <button class="activate-data-service-btn">Activate</button>
        </div>
        <div class="data-service">
            <div class="data-service-container"> <p class="data-amount">SMS + Voice</p> <p class="data-price">(1 month UNLIMITED) for LKR 2100.00</p></div>
            <button class="activate-data-service-btn">Activate</button>
        </div>
    </div>
  )
}

export default ValueAddedservice;