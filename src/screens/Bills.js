import React , {useState} from 'react';
import Navbar from '../components/navbar';
import CurrentBills from '../components/currentbills';
import PaidBills from '../components/paidbills';
import './Bills.css'

const Bills = () => {
    const [currentBillsSelected, setCurrentBillsSelected] = useState(true); // If yes then curren bills. If no then paid bills

    const handleCurrentClicked = () => {
            setCurrentBillsSelected(true);
    }

    const handlePaidClicked = () => {
        setCurrentBillsSelected(false)
    }
    return (
        <div>
            <Navbar />
            <div class="body-container">
                <div class="bill-tab">
                    <div class="current-bills-tab" onClick={handleCurrentClicked}>
                        <p>Current Bills</p>
                    </div>
                    <div class="paid-bills-tab" onClick={handlePaidClicked}>
                        <p>Paid Bills</p>
                    </div>
                </div>
                <div>
                {currentBillsSelected ? (
                    <CurrentBills />
                ) : (
                    <PaidBills />
                )}
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Bills