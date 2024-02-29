import React, { useState } from 'react';
import axios from 'axios';

function Account() {
  const [account_type, setAccountType] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
//   const [balance,setBalance] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();


  // Fetch the access token from localStorage
   const accessToken = localStorage.getItem('access_token');

    // Check if the access token is present
   if (!accessToken) {
    console.error('Access token not found');
    return;
   }

   const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
   };

    axios.post('/account', { account_type}, config)
      .then((res) => {
        console.log(res.data);
        setSuccessMessage('Account created successfully!');
        setErrorMessage('');
        // Optionally, clear the form fields
        setAccountType('');
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage('Error creating account. Please try again.');
        setSuccessMessage('');
      });
  };

  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Account Type
          <select value={account_type} onChange={(e) => setAccountType(e.target.value)}>
            <option value="personal Account">PersonalAccount</option>
            <option value="savings">Savings</option>
            <option value="income">IncomeAccount</option>
            <option value="revenue">RevenueAccount</option>
          </select>
        </label>
    
        <button type='submit'>Create</button>
      </form>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default Account;
