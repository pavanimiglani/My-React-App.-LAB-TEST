
import React from 'react';

const Receipt = ({ transactionData }) => {
  return (
    <div className="receipt">
      <h2>Transaction Receipt</h2>
      <ul>
        <li>
          <strong>Transaction ID:</strong> {transactionData.transactionID}
        </li>
        <li>
          <strong>Date:</strong> {transactionData.date}
        </li>
        <li>
          <strong>Amount:</strong> {transactionData.amount}
        </li>
        <li>
          <strong>Sender:</strong> {transactionData.sender}
        </li>
        <li>
          <strong>Receiver:</strong> {transactionData.receiver}
        </li>
      </ul>
    </div>
  );
};

export default Receipt;

