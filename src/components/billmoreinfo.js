import React, {useState} from 'react'
import './billmoreinfo.css'




const billmoreinfo = ({id, date, duedate, amount, closePressed}) => {



  return (
    <div class="moreinfo-container">
        <div class="moreinfo-topic"><p>Bill Information</p></div>
        <div class="bill-info-body">
            <div class="bill-header">Bill ID:</div>
            <div class="b-data">{id}</div>
            <div class="bill-header">Description:</div>
            <div class="b-data">Social media combo package monthly activation.</div>
            <div class="bill-header">Date:</div>
            <div class="b-data">{date}</div>
            <div class="bill-header">Duedate:</div>
            <div class="b-data">{duedate}</div>
            <div class="bill-header">Amount:</div>
            <div class="b-data">{amount}</div>
        </div>
        <button class="close-more-info-btn" onClick={() => closePressed(true)}>Close</button>
    </div>
  )
}

export default billmoreinfo