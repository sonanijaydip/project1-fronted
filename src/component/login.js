import React, { useState } from 'react'
import '../component/css/login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate(' ')

let [email, setemail] = useState('');
let [password, setpassword] = useState('');
let [error, setError] = useState('');

const btnhandler=() => {
  axios.post('http://localhost:5000/login',{
    email: email,
    password: password
  })
  
  .then(function (response) {
    console.log(response.data);

    if(response.data.status === "success")
    {

      navigate("/");
    }

    if(response.data.status === "Check Your Email")
    {
      setError(response.data.status);
      alert("check your password")
    }
    if(response.data.status === "Check Your Password")
    {
      setError(response.data.status);
      alert("check your password")
    }
    if(response.data.status === "user already registered")
    {
      alert("please fill the data ")
    }
  })
  .catch(function (error) {
    console.log(error);
  })
}

  return (
    <>
  {/* <div className='main'> */}
    <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              onChange={(e) =>{setemail(e.target.value)}}
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) =>{setpassword(e.target.value)}}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
  
              <div className='btn btn-primary' onClick={btnhandler} >Submit</div>
          </div>
          <p className='mt-3'><a href='#'><Link to="/signup">you don't have any account?</Link></a></p>
          <p className="forgot-password text-right mt-2">
             <a href="#"><Link to="/forget">Forgot password?</Link></a>
          </p>
        </div>
      </div>
    </div>
    {/* </div> */}
    </>
  );
}

export default Login