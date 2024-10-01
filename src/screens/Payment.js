import React , {useState} from 'react'
import { useLocation } from 'react-router-dom';
import './Payment.css'

const Payment = () => {
    const location = useLocation();
    const { data } = location.state || {}; 
    const [stepNumber, setStepNumber] = useState(1)
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const handleNextBtn = () => {
    if(selectedMethod == ''){
        alert("Please Select Payment Method");
        
    }else{
        setStepNumber(2);
    }
  }

  return (
    <div class="payment-outest-container">
        <div class="payment-outer-container">
            <div class="payment-topic">
            <img src="/images/STL-logo.png" class="img-logo"/>
            <p>Payment</p>
            </div>

            <div class="transaction-details">
            <h3>Transaction Details</h3>
            <div class="transaction-record"><p style={{fontWeight:"bold"}}>Type of payment:</p><p>{data?.type}</p></div>
            <div class="transaction-record"><p style={{fontWeight:"bold"}}>Amount:</p><p>{data?.amt}</p></div>

            </div>

            
            {stepNumber===1 ? (
                /**********************************************Step 01************************************************** */
                <div class="payment-method-container">
                <p style={{marginTop: '20px',marginBottom:'20px',fontWeight:'bold'}}>Select payment method</p>
                <div>
                <label>
                    <input
                    type="radio"
                    value="Visa"
                    checked={selectedMethod === 'Visa'}
                    onChange={handleChange}
                    />
                    Visa
                </label>

                <label>
                    <input
                    type="radio"
                    value="MasterCard"
                    checked={selectedMethod === 'MasterCard'}
                    onChange={handleChange}
                    />
                    MasterCard
                </label>

                <label>
                    <input
                    type="radio"
                    value="PayPal"
                    checked={selectedMethod === 'PayPal'}
                    onChange={handleChange}
                    />
                    PayPal
                </label>

            <p style={{marginTop: '20px',marginBottom:'20px'}}>Selected Payment Method: {selectedMethod}</p>
            </div>
        

            </div>
                ) : (
                    /**********************************************Step 02************************************************** */

                    <div style={{marginTop:'30px', marginBottom:'30px'}}>
                        <form>
                            <div style={{textAlign:'left', width:'343px',margin:'10px auto'}}>
                            <label class="textbox-label" style={{display:'block'}}>Card Holder Name:</label>
                            <input type="text" style={{}} placeholder="Enter Card Holder Name" class="TextBox"/>
                            </div>
                            <div style={{textAlign:'left', width:'343px',margin:'10px auto'}}>
                            <label class="textbox-label" style={{display:'block'}}>Card Number:</label>
                            <input type="text" style={{}} placeholder="Enter Card Number" class="TextBox"/>
                            </div>
                            <div style={{display:'flex', width:'343px',margin:'auto', justifyContent: 'space-between'}}>
                                <div style={{textAlign:'left', width:'150px'}}>
                                <label class="textbox-label" style={{display:'block'}}>CVC:</label>
                                <input type="text" style={{width:'100px'}} placeholder="Enter CVC" class="TextBox"/>
                                </div>
                                <div style={{textAlign:'left', width:'150px'}}>
                                <label class="textbox-label" style={{display:'block'}}>Expiry Date:</label>
                                <input type="text" style={{width:'100px'}} placeholder="Enter Date" class="TextBox"/>
                                </div>
                            </div>

                        
                    </form>
                    </div>
                )}

                {stepNumber===1 ? (
                    <button class="payment-next-btn" onClick={handleNextBtn}>Next</button>
                    ) : (
                        <button class="payment-next-btn" >Confirm</button>
                    )}

            {/* <button class="payment-next-btn" onClick={handleNextBtn}>Next</button> */}
           
        </div>
        
    </div>
  )
}

export default Payment;