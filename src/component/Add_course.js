import React from "react";
import { useState } from 'react';
import '../component/css/Add_course.css'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";

function AddCourse(){
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
          <Button>Add Course</Button>
        <Offcanvas.Body>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

    {/* <div className="Auth-form-container main">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Add Course</h3>
          <div className="form-group mt-3">
            <label>Course Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter course name"
            />
          </div>

          <div className="d-grid gap-2 mt-3">
              <Link to="" className='btn btn-primary'>Submit</Link>
         
          </div>

        </div>
      </form>
    </div> */}


export default AddCourse;