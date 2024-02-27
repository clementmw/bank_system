import React, { useState } from 'react';
import axios from 'axios';

function TransactionForm() {
  const [formData, setFormData] = useState({
   
    transaction_type: 'withdraw',
    receiver_id: '',
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('access_token');
      const response = await axios.post('/transaction', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage(response.data.message);

      // Optionally, you can reset the form or perform other actions upon successful submission
      setFormData({
    
        transaction_type: 'withdraw',
        receiver_id: '',
      });
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Transaction Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Transaction Type:</label>
          <select
            name="transaction_type"
            value={formData.transaction_type}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          >
            <option value="withdraw">Withdraw</option>
            <option value="deposit">Deposit</option>
          </select>
        </div>

        {formData.transaction_type === 'deposit' && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Receiver Username:</label>
            <input
              type="text"
              name="receiver_id"
              value={formData.receiver_id}
              onChange={handleChange}
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

      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
}

export default TransactionForm;
