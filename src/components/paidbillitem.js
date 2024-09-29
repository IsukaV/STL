import React from 'react';
import './paidbillitem.css';

const BillItem = ({ id, date, duedate, amount }) => {
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
                    <p>{duedate}</p>
                    <p>{amount}</p>
                    </div>
                    <div>
                        <button class="info-btn">More Info</button>
                    </div>
                    <div>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
        </div>
    );
};

export default BillItem