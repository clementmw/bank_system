import React, { useState, useEffect } from 'react';
import axios from 'axios';

function User() {
  const [userData, setUserData] = useState(null);
  const [accountData, setAccountData] = useState(null);
  const [transactionData, setTransactionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('access_token');

        // Fetch user data
        const userResponse = await axios.get('/user/user_data', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(userResponse.data);

        // Fetch account data
        const accountResponse = await axios.get('/account', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAccountData(accountResponse.data);
        setLoading(false);

        // fetch transaction details for the user
     const transactionDetails = await axios.get("/transaction",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setTransactionData(transactionDetails.data);


      } catch (error) {
        console.error('Error fetching user or account data or transaction:', error);
        setLoading(false);
      }
    };
    

    fetchUserData();
  }, []);

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      {loading ? (
        <p>Loading user and account data...</p>
      ) : (
        <div>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>

          <h2 className="text-2xl font-bold mt-4">Account Information</h2>
          {accountData ? (
            <div>
              <p>Account Type: {accountData.account_type}</p>
              <p>Account Number: {accountData.account_number}</p>
              <p>Balance: {accountData.balance}</p>
            </div>
          ) : (
            <p>No account data available</p>
          )}
          <h2 className="text-2xl font-bold mt-4">Transaction History</h2>
              {transactionData ? (
                  transactionData.map((transaction) => (
                    <div key={transaction.id}>
                      <p>Transaction ID: {transaction.id}</p>
                      <p>Transaction Type: {transaction.transaction_type}</p>
                      <p>Amount: {transaction.amount}</p>
                      <p>Date: {transaction.created_at}</p>
                    </div>
                  ))
                ) : (
                  <p>No transactions found.</p>
                )}

     
            
        </div>
      )}
    </div>
  );
}

export default User;