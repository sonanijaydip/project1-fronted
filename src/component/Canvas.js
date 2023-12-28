
import React from 'react'
import './canvas.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Canvas() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <table className='center'>
                <tr >
                    <td><a href='/about'>about</a></td>
             
                </tr>
                <tr>
                    <td><a href='/Contact'>contact</a></td>
                </tr>
                <tr>
                    <td><a href='/Home'>Home</a></td>
                </tr>
                <tr>
                    <td><a href='/Login'>login</a></td>
                </tr>


            </table>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Canvas
