import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useAuth } from './AuthProvider';
import TransactionForm from './TransactionForm';

function User() {
  const [userData, setUserData] = useState(null);
  const [accountData, setAccountData] = useState([]);
  const [loading, setLoading] = useState(true);

  // const { auth, setAuth } = useAuth();

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
      } catch (error) {
        console.error('Error fetching user or account data or transaction:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // const handleLogout = () => {
  //   const token = localStorage.getItem('access_token');
  //   // setAuth(false);
  //   // logout for the user
  //   axios.get('/auth/logout', {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then(() => {
  //       console.log('Logged out successfully');
  //       localStorage.removeItem('access_token');
  //       window.location.href = '/login'; // Redirect to the login page after logout
  //     })
  //     .catch((error) => {
  //       alert('Failed to logout');
  //     });
  // };

  return (
    <div className="mt-10">
    <h1 className="text-3xl font-bold mb-4">Hello: {userData ? userData.username : 'User'}</h1>
  
    {loading ? (
      <p>Loading user and account data...</p>
    ) : (
      <div>
        <p>Email: {userData.email}</p>
        <div className="mt-4">
          <a href="/newaccount" className="text-blue-500 hover:underline">
            Create a New account
          </a>
        </div>
  
        <h2 className="text-2xl font-bold mt-4">Account Information</h2>
        {accountData.length > 0 ? (
          accountData.map(account => (
            <div key={account.id} className="mt-4">
              <p>Account Type: {account.account_type}</p>
              <p>Account Number: {account.account_number}</p>
              <p>Account Balance: {account.balance}</p>
              {/* Add other account details as needed */}
            </div>
          ))
        ) : (
          <p>No account data available</p>
        )}
  
        {/* Pass individual accounts to TransactionForm */}
        {accountData.map(account => (
          <TransactionForm
            key={account.id}
            balance={account.balance}
            current_user={userData.username}
            userData={userData}
          />
        ))}
      </div>
    )}
  </div>
  
  );
}

export default User;
