// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './component/login'
import Home from './component/Home'
import Contact from './component/Contact'
import About from './component/About'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/contact' element={<Contact/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;