import React from "react";
import { useState } from 'react';
import '../component/css/adminlte.css'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";

function Adminlte(){
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        {/* <Offcanvas.Header closeButton> */} 
        <Offcanvas.Title><img className="image" src={require(`../img/admin.webp`)}></img></Offcanvas.Title>
        {/* </Offcanvas.Header> */}
          <Link to="/addcourse"><Button className="mt-2 w-100 background">Add Course</Button></Link>
          <Button className="mt-2">Add Course</Button>
          <Button className="mt-2">Add Course</Button>
          <Button className="mt-2">Add Course</Button>
       
      </Offcanvas>
    </>
  );
}

export default Adminlte;