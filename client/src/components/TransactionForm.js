import React, { useState } from 'react';
import axios from 'axios';

function TransactionForm() {
    const [amount, setAmount] = useState('');
    const [transaction_type, setTransactionType] = useState('')
    const [receiver_id,setReceiver] = useState('')


  const handleSubmit = (e) =>{
    e.preventDefault()
    
    axios.post ('/transaction', {amount,transaction_type})
    .then (res => {
        console.log(res.data)

        localStorage.setItem('access_token', res.data.tokens.access)
    })
    .catch (err =>{
        console.log(err)
    })

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
      </form>

    </div>
  );
}

export default TransactionForm;
