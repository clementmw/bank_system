import './output.css';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/signup' element={<Register/>}/>
        <Route path= '/login' element={<Login/>}/>

      </Routes>
    </div>
  );
}

export default App;
