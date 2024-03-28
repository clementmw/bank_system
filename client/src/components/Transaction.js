import React, { useEffect ,useState} from 'react'
import axios from 'axios';
import LoginNavbar from './LoginNavbar';
// import { useAuth } from './AuthProvider';


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
      <LoginNavbar/>
      <h2 className="text-2xl font-bold mt-4">Transaction History</h2>
      {transactionData ? (
        transactionData.map((transaction) => (
          <div key={transaction.id} className="mt-4">
            <table className="table-auto w-3/4">
              <thead>
                <tr className='bg-gray-200 text-black text-center border-b-2 border-gray-400 '>
          
                  <th className=" ">Transaction Type</th>
                  <th className="">Amount</th>
                  <th className="">Date</th>
                  <th className="">Receiver</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-gray-200 text-white text-center'>
                  <td className="bg-gray-600">{transaction.transaction_type.charAt(0).toUpperCase() + transaction.transaction_type.slice(1).toLowerCase()}</td>
                  <td className="bg-gray-600">{transaction.amount}</td>
                  <td className="bg-gray-600">{transaction.created_at}</td>
                  <td className="bg-gray-600">
                    {transaction.transaction_type === 'deposit' && (
                      <div>
                        <p>{transaction.receiver_id}</p>
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <p>No transactions found.</p>
      )}
    </div>
  );
 }
 export default Transaction