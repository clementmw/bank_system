import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TransactionForm({balance,current_user,userData}) {
    const [amount, setAmount] = useState('');
    const [transaction_type, setTransactionType] = useState('')
    const [receiver_id,setReceiver] = useState('')
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [data, setAccount] = useState([]);
    const [account_number, setAccountNumber] = useState('')

useEffect(()=> {

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
  axios.get('/account',config) 
  .then((res)=> {
    setAccount(res.data)
    console.log(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })

},[])

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

  if (!account_number) {
    setErrorMessage('Please enter the account number.');
    return;
  }

  // Find the account based on the entered accountNumber
  const selectedAccount = data.find((account) => account.account_number === parseInt(account_number))

  if (!selectedAccount) {
    console.log('Account not found.');
    return;
  }

  if (selectedAccount) {
  axios.post('/transaction', { amount, transaction_type, receiver_id ,account_number: selectedAccount.account_number,}, config)
  .then((res) => {
    setSuccessMessage(`Transaction successful! ${getSuccessMessage(transaction_type, receiver_id, amount)}`);
    setErrorMessage('');
    console.log(res.data);
    // Optionally, you can perform additional actions upon successful submission
  })
  .catch((err) => {
    setSuccessMessage('');
    setErrorMessage(`Transaction failed. ${getErrorMessage(transaction_type, amount,balance,receiver_id)}`); // Removed extra parentheses
    console.error(err);
  });

} 

const getSuccessMessage = (transactionType, receiverId, amount) => {
  if (transactionType === 'deposit') {
    return `You have deposited ksh${amount} to ${receiverId}.`;
  }
  if (transactionType === 'withdraw') {
    return `You have withdrawn ksh${amount}`;
  }
};

const getErrorMessage = (transactionType, amount,balance,receiver_id,current_user) => {

  if (transactionType === 'deposit' && receiver_id === current_user ) {
    return `You cannot deposit in your own account`;
  }
  if (transactionType === 'deposit' && parseFloat(amount) === balance) {
    return ` You cannot transfer funds.Account balance cannot be 0`;
  }
  

  if (transactionType === 'withdraw' && parseFloat(amount) === balance) {
    return `Insufficient balance. Please try again, account balance cannot be 0`;
  }

  if (transactionType === 'withdraw' && amount > balance) {
    return `Insufficient balance. Please check account balance and try again`;
  }
  if ((transactionType === 'withdraw' || transaction_type === 'deposit') && balance === 0 ){
    return `you cannot transact`;
  }
 }

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
          <label className="block text-sm font-medium text-gray-600">AccountNumber:</label>
          <input
            type='number'
            value={account_number}
            onChange={(e)=> setAccountNumber(e.target.value )}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder='Enter your account Number'
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Amount:</label>
          <input
            type='text'
            pattern='\d*'
            inputMode='numeric'
            value={amount}
            onChange={(e)=> setAmount(e.target.value )}
            className="mt-1 p-2 border rounded-md w-full"
            required
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
            <option value="">Select Transaction </option>
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
              required
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
