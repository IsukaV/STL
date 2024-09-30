import React , {useState} from 'react';
import './currentbills.css'
import BillItem from './billitem'
import Pagination from './pagination';

const CurrentBills = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const billsPerPage = 3;

  const data = [
    {
      id: 3223,
      date: "Jan 23, 2024",
      duedate: "Sep 29, 2024 (Over Due)", // Changed to Sep 29, 2024
      amount: "LKR 1300.00",
    },
    {
      id: 3224,
      date: "Feb 10, 2024",
      duedate: "Oct 01, 2024", // Random date after Sep 29
      amount: "LKR 1500.00",
    },
    {
      id: 3225,
      date: "Mar 05, 2024",
      duedate: "Oct 15, 2024", // Random date after Sep 29
      amount: "LKR 1400.00",
    },
    {
      id: 3226,
      date: "Apr 12, 2024",
      duedate: "Nov 01, 2024", // Random date after Sep 29
      amount: "LKR 1700.00",
    },
    {
      id: 3227,
      date: "May 22, 2024",
      duedate: "Nov 10, 2024", // Random date after Sep 29
      amount: "LKR 1600.00",
    },
    {
      id: 3228,
      date: "Jun 15, 2024",
      duedate: "Oct 20, 2024", // Random date after Sep 29
      amount: "LKR 1200.00",
    },
    {
      id: 3229,
      date: "Jul 03, 2024",
      duedate: "Nov 25, 2024", // Random date after Sep 29
      amount: "LKR 1900.00",
    },
    {
      id: 3230,
      date: "Aug 19, 2024",
      duedate: "Dec 05, 2024", // Random date after Sep 29
      amount: "LKR 1450.00",
    },
    {
      id: 3231,
      date: "Sep 28, 2024",
      duedate: "Dec 20, 2024", // Random date after Sep 29
      amount: "LKR 1550.00",
    },
    {
      id: 3232,
      date: "Oct 10, 2024",
      duedate: "Jan 10, 2025", // Random date after Sep 29
      amount: "LKR 1350.00",
    },
  ];
  
  

      const indexOfLastBill = currentPage * billsPerPage;
      const indexOfFirstBill = indexOfLastBill - billsPerPage;
      const currentBills = data.slice(indexOfFirstBill,indexOfLastBill);

      const paginate = (num) => {
        setCurrentPage(num);
      }

    return (

        <div class="outer-container">
            <div class="topic"><p>Current bills</p></div>
            <div class="bills-container">

            {currentBills.map((item) => (
                <BillItem
                key={item.id}
                id={item.id}
                date={item.date}
                duedate={item.duedate}
                amount={item.amount}
                />
            ))}
                
            </div>
            <Pagination billsPerPage={billsPerPage} totalBills={data.length} currentPage={currentPage} paginate={paginate}/>
        </div>
    );
};

export default CurrentBills