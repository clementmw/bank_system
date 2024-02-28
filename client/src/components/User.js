import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthProvider';

function User() {
  const [userData, setUserData] = useState(null);
  const [accountData, setAccountData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { auth, setAuth } = useAuth();

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

  const handleLogout = () => {
    const token = localStorage.getItem('access_token');
    setAuth(false);
    // logout for the user
    axios.get('/auth/logout', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        console.log('Logged out successfully');
        localStorage.removeItem('access_token');
        window.location.href = '/login'; // Redirect to the login page after logout
      })
      .catch((error) => {
        alert('Failed to logout');
      });
  };

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-4">Welcome, {userData ? userData.username : 'User'}</h1>

      {loading ? (
        <p>Loading user and account data...</p>
      ) : (
        <div>
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

          {auth && (
            <div className="mt-4">
              <p>Create a New Account:</p>
              {/* Include form or link for creating a new account */}
            </div>
          )}

          <div className="mt-4">
            <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded-md">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
