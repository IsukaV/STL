import React from 'react'
import './pagination.css'
export default function pagination({totalBills,billsPerPage,currentPage, paginate}) {
    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(totalBills / billsPerPage); i++){
        pageNumbers.push(i);
    }


  return (
    <div>
        <ul class="pagination">
            {pageNumbers.map(number => (
                <li key={number} className={number === currentPage ? 'active' : ''}>
                    <a class="page-link" onClick={() => paginate(number)}>
                        {number}
                    </a>
                </li>
            ))
            }

        </ul>
    </div>
  )
}
