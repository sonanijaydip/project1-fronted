// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './component/login'
import Home from './component/Home'
import Forget from './component/Forget'



function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/forget' element={<Forget/>} ></Route>
        
        </Routes>
      
    
    </div>
  );
}

export default App;