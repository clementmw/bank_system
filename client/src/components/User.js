import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionForm from './TransactionForm';

function User() {
  const [userData, setUserData] = useState(null);
  const [accountData, setAccountData] = useState([]);
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
    <div className="container mx-auto p-4">
  <h1 className="text-3xl font-bold mb-4">
    Hello: {userData ? userData.username .toUpperCase() : 'User'}
  </h1>

  {loading ? (
    <p>Loading user and account data...</p>
  ) : (
    <div className="flex flex-col mt-10 md:flex-row">

       <div className="md:w-1/2 pr-4">
          <a href="/newaccount" className="text-blue-500 hover:underline">
            Create a New account
          </a>
        
        <h2 className="text-2xl font-bold mb-4">Account Information</h2>
        {accountData.length > 0 ? (
          accountData.map(account => (
            <div key={account.id} className="mb-6 border rounded p-4 shadow-md bg-slate-200">
            <h3 className="text-lg font-bold mb-2 text-gray-800">Account Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 uppercase">Account Type</p>
                <p className="text-lg font-semibold">{account.account_type}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 uppercase">Account Number</p>
                <p className="text-lg font-semibold">{account.account_number}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 uppercase">Account Balance</p>
                <p className="text-lg font-semibold">{account.balance}</p>
              </div>
            </div>
          </div>
          
          ))
        ) : (
          <p>No account data available</p>
        )}

      </div>
      <div className="md:w-1/2 pl-4 ">
        <TransactionForm
          balance={accountData.balance}
          current_user={userData.username}
          userData={userData}
        />
      </div>

    </div>
  )}
</div>

 
  
  
  );
}

export default User;
