import React from 'react';
import './currentbills.css'
import BillItem from './billitem'

const CurrentBills = () => {

    const data = [
        {
          id: 3223,
          date: "Jan 23, 2024",
          duedate: "Jan 23, 2025",
          amount: "LKR 1300.00",
        },
        {
          id: 3224,
          date: "Feb 10, 2024",
          duedate: "Feb 10, 2025",
          amount: "LKR 1500.00",
        },
        {
          id: 3225,
          date: "Mar 05, 2024",
          duedate: "Mar 05, 2025",
          amount: "LKR 1400.00",
        },
      ];

    return (

        <div class="outer-container">
            <div class="topic"><p>Current bills</p></div>
            <div class="bills-container">

            {data.map((item) => (
                <BillItem
                key={item.id}
                id={item.id}
                date={item.date}
                duedate={item.duedate}
                amount={item.amount}
                />
            ))}
                
            </div>
        </div>
    );
};

export default CurrentBills