import React, { useState } from 'react'
import '../component/css/login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';



function Login() {

let [email, setemail] = useState('');
let [password, setpassword] = useState('');

const btnhandler=() => {
  axios.get('http://localhost:5000/login',{
    email : email,
    password: password
  })
  

  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}


  return (
    <>
  {/* <div className='main'> */}
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              onChange={(e) =>{ setemail(e.target.value)}}
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) =>{ setpassword(e.target.value)}}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
  
              <Link className='btn btn-primary' onClick={btnhandler()} >Submit</Link>
          </div>
          <p className='mt-3'><a href='#'><Link to="/signup">you don't have any account?</Link></a></p>
          <p className="forgot-password text-right mt-2">
             <a href="#"><Link to="/forget">Forgot password?</Link></a>
          </p>
        </div>
      </form>
    </div>
    {/* </div> */}
    </>
  );
}

export default Login