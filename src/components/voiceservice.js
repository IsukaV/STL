import React from 'react'
import { useNavigate } from 'react-router-dom';
import './voiceservice.css'


function Voiceservice() {
    const navigate = useNavigate();

    const handleBuyVoice = () => {
        const data = { amt: 50, type: 'Voice Recharge' };
      
        navigate('/payment', { state: { data } });
    }
  return (
    <div style={{textAlign:'center'}}>
        <div class="custom-recharge-container">
           <p style={{fontSize:'18px', marginBottom:'5px'}}>Custom Recharge</p>
           <div class="textbox-container" style={{marginBottom: '0px'}}>
                <input type="text" placeholder="Enter Amount" class="recharge-textBox"/>
            </div>
            <button class="recharge-btn">Recharge</button>
        </div>

        <p style={{fontSize:'18px', marginBottom:'5px'}}>Quick Recharge</p>
        <div class="voice-service">
            <div class="voice-service-container"> <p class="data-amount">LKR 50.00</p></div>
            <button class="activate-data-service-btn" onClick={handleBuyVoice}>Buy</button>
        </div>
        <div class="voice-service">
            <div class="voice-service-container"> <p class="data-amount">LKR 100.00</p> </div>
            <button class="activate-data-service-btn">Buy</button>
        </div>
        <div class="voice-service">
            <div class="voice-service-container"> <p class="data-amount">LKR 200.00</p> </div>
            <button class="activate-data-service-btn">Buy</button>
        </div>
    </div>
  )
}

export default Voiceservice;