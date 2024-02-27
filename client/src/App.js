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
import { useAuth} from './components/AuthProvider';
import TransactionForm from './components/TransactionForm';




function App() {
  const {auth} = useAuth();
  return (
    <div className="App">
      {auth ? <LoginNavbar/> : <NormalNavbar/>}
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/signup' element={<Register/>}/>
        <Route path= '/login' element={<Login/>}/>
        <Route path = '/testimonial' element={<Testimonial/>}/>
        <Route path = '/contact' element={<Contact/>}/>
        <Route path = '/about' element={<About/>}/>
        <Route path='/user' element = {<User/>}/>
        <Route path='/transaction' element = {<Transaction/>}/>
        <Route path = '/transfer' element = {<TransactionForm/>}/>



      </Routes>
    </div>
  );
}

export default App;
