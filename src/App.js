// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './component/login'
import Home from './component/Home'
import Forget from './component/Forget'
import Addcourse from './component/Add_course'



function App() {
  return (
    <div className="App main">
      
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/forget' element={<Forget/>} ></Route>
          <Route path='/addcourse' element={<Addcourse/>} ></Route>
        
        </Routes>
      
    </div>
  );
}

export default App;