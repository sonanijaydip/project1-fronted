import React, { useState } from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import '../component/css/Home.css'
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom'

function Home() {

let [name, setname] = useState('')
let [email, setemail] = useState('');
let [password, setpassword] = useState('');
let [confirmPassword, setconfirmPassword] = useState('');

const btnhandler=() => {
  axios.post('http://localhost:5000/register',{
    name : name,
    email : email,
    password: password,
    confirmPassword: confirmPassword
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
    <div className='main'>
      <Container>
        <Row className=" vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className=" px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4 second-main">
                  <div className="mb-3">
                    <div className=''>
                  <h1 className='text-center'>Register</h1>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={(e) => {setname (e.target.value)}} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setemail (e.target.value)}} />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => {setpassword (e.target.value)}} />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => {setconfirmPassword (e.target.value)}} />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        {/* <Button variant="primary" type="submit"> */}
                          <Link className='btn btn-primary' onClick={btnhandler}>
                          Create Account
                          </Link>
                        {/* </Button> */}
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{' '}
                        <Link to="/login">Sign In</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Home
