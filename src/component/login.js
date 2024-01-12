import React from 'react'
import '../component/css/login.css';
import { Link } from 'react-router-dom';

function Login() {
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
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
  
              <Link to="/adminpanel" className='btn btn-primary'>Submit</Link>
          </div>
          <p className='mt-3'><a href='#'><Link to="/">you don't have any account?</Link></a></p>
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