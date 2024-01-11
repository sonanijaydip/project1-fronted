import React from "react";
import { Link } from "react-router-dom";
import './css/course.css'

function Add_course(){
    return(
        <>
        
    <div className="Auth-form-container main">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">add course</h3>
          <div className="form-group mt-3">
            <label>enter course name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter course name"
            />
          </div>
          
          <div className="d-grid gap-2 mt-3">
            {/* <button type="submit" className="btn btn-primary"> */}
          
              <Link to="" className='btn btn-primary'>Submit</Link>
            {/* </button> */}
          </div>
        </div>
      </form>
    </div>

        </>
    )
}

export default Add_course;