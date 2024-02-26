import React, { useEffect ,useState} from 'react'
import axios from 'axios';

function Transaction() {
  const [transactionData, setTransactionData] = useState(null);

  useEffect (()=>{
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const transactionDetails = await axios.get("/transaction",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setTransactionData(transactionDetails.data);


      } catch (error) {
        console.error('Error fetching user or account data or transaction:', error);
        // setLoading(false);
      }
    };

    fetchUserData();

  },[])


  return (
    <div>
      <h2 className="text-2xl font-bold mt-4">Transaction History</h2>
              {transactionData ? (
                  transactionData.map((transaction) => (
                    <div key={transaction.id}>
                      <p>Transaction ID: {transaction.id}</p>
                      <p>Transaction Type: {transaction.transaction_type}</p>
                      <p>Amount: {transaction.amount}</p>
                      {/* <p>Date: {transaction.created_at}</p> */}
                    </div>
                  ))
                ) : (
                  <p>No transactions found.</p>
                )}

    </div>
  )
}

export default Transaction