import React, {useState} from 'react';
import MoreInfoContainer from '../components/billmoreinfo'
import { useNavigate } from 'react-router-dom';
import './billitem.css';

const BillItem = ({ id, date, duedate, amount }) => {
    const navigate = useNavigate();

    const [moreInfoStatus, setMoreInfoStatus] = useState(false);
    const handleMoreInfo = () => {
        setMoreInfoStatus(true)
    }
    const handleCloseMoreInfo = () => {
        setMoreInfoStatus(false)
    }

    const handleOnlinePay = () => {
        const data = { amt: amount, type: 'Bill Payment' };
      
        navigate('/payment', { state: { data } });
      };

    return (
        <div>
            <div class="bill-container">
                    <div class="bill-headers">
                        <p>Bill ID:</p>
                        <p>Date:</p>
                        <p>Due Date:</p>
                        <p>Total Amount:</p>
                    </div>
                    <div class="bill-data">
                    
                    <p>{id}</p>
                    <p>{date}</p>
                    {id==3223? (
                        <p style={{color:'red'}}>{duedate}</p>
                    ):(
                        <p>{duedate}</p>
                    )}
                    
                    <p>{amount}</p>
                    </div>
                    <div>
                        <button class="info-btn" onClick={handleMoreInfo}>More Info</button>
                    </div>
                    <div>
                        <button class="pay-btn" onClick={handleOnlinePay}>Pay Online</button>
                    </div>
                </div>
                {moreInfoStatus && <MoreInfoContainer id={id} date={date} duedate ={duedate} amount={amount} closePressed={handleCloseMoreInfo}/>}
        </div>
    );
};

export default BillItem