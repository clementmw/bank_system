import './output.css';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import { Routes, Route } from 'react-router-dom';
import Testimonial from './pages/Testimonial';
import LoginNavbar from './components/LoginNavbar';
import Contact from './pages/Contact';
import About from './pages/About';
import User from './components/User';
import Transaction from './components/Transaction';
import NormalNavbar from './components/NormalNavbar';
import TransactionForm from './components/TransactionForm';
import Account from './components/Account';
import { useState,useEffect} from 'react';




function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
   
  useEffect(() => {
    // Check for the presence of a valid JWT token here
    const token = localStorage.getItem('access_token'); 
    if (token) {
     
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []); 
  

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('access_token'); 
    
  };

  return (
    <div className="App">
       {isLoggedIn ? <LoginNavbar onLogout={handleLogout} /> : <NormalNavbar />}   
      <Routes>
      <Route path="/" element={<Home />} /> 
        <Route path = '/signup' element={<Register/>}/>
        <Route path= '/login'
         element={<Login onLogin={() => setLoggedIn(true)} />}/>
        <Route path = '/testimonial' element={<Testimonial/>}/>
        <Route path = '/contact' element={<Contact/>}/>
        <Route path = '/about' element={<About/>}/>
        <Route path='/user' element = {<User/>}/>
        <Route path='/transaction' element = {<Transaction/>}/>
        <Route path = '/transfer' element = {<TransactionForm/>}/>
        <Route path = '/newaccount' element = {<Account/>}/>

      </Routes>
    </div>
  );
}

export default App;
