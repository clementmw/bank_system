import React, { useState } from 'react';
import axios from 'axios';

function TransactionForm() {
    const [amount, setAmount] = useState('');
    const [transaction_type, setTransactionType] = useState('')
    const [receiver_id,setReceiver] = useState('')
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = (e) => {
  e.preventDefault();

  // Fetch the access token from localStorage
  const accessToken = localStorage.getItem('access_token');

  // Check if the access token is present
  if (!accessToken) {
    console.error('Access token not found');
    return;
  }

  // Add authorization header to the Axios request
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  axios.post('/transaction', { amount, transaction_type, receiver_id }, config)
    .then((res) => {
      setSuccessMessage(`Transaction successful! ${getSuccessMessage(transaction_type, receiver_id, amount)}`);
      setErrorMessage('');
      console.log(res.data);
      // Optionally, you can perform additional actions upon successful submission
    })
    .catch((err) => {
      setSuccessMessage('');
      setErrorMessage('Transaction failed. Please check your account balance and try again.');
      console.error(err);
    });

    const getSuccessMessage = (transactionType, receiverId, amount) => {
      if (transactionType === 'deposit') {
        return `You have deposited ksh${amount} to ${receiverId}.`;
      }
      if (transactionType === 'withdraw') {
        return `You have withdrawn ksh${amount}`;
      }
      
      return '';
    };

    // clear form after successfull transaction 
    setAmount('');
    setTransactionType('');
    setReceiver('');
    setSuccessMessage('');
    setErrorMessage('');
}
    
    

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Transaction Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Amount:</label>
          <input
            type='text'
            pattern='\d*'
            inputMode='numeric'
            value={amount}
            onChange={(e)=> setAmount(e.target.value )}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Transaction Type:</label>
          <select
            name="transaction_type"
            value={transaction_type}
            onChange={(e)=> setTransactionType(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          >
            <option value="withdraw">Withdraw</option>
            <option value="deposit">Deposit</option>
          </select>
        </div>

        {transaction_type === 'deposit' && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Receiver Username:</label>
            <input
              type="text"
              name="receiver_id"
              value={receiver_id}
              onChange={(e) => setReceiver(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-black py-2 px-4 rounded-md "
        >
          Submit
        </button>

        {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}
        {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
      
      </form>

    </div>
  );
}

export default TransactionForm;
