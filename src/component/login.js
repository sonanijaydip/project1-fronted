import React from 'react'
import './login.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Button, Card } from 'react-bootstrap';


function Login() {
  return (
    <>
      <Container>
        <Row>
          <Col className='box1 col-12 col-lg-4 col-sm-6'>
            <Card style={{ width: '18rem' }}>
              <Card.Img style={{height: '160px', backgroundSize: 'cover'}} variant="top" src={require(`../img/kane1.jpg`)} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className='box2 co-12 col-lg-4 col-sm-6'>
          <Card style={{ width: '18rem' }}>
              <Card.Img  variant="top" src={require(`../img/kane2.jpg`)} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className='box3 col-12 col-lg-4 col-sm-6'>
          <Card style={{ width: '18rem' }}>
              <Card.Img className='image1' variant="top" src={require(`../img/kane3.jpg`)} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* <Col className='box3 '>
          <Card style={{ width: '18rem' }}>
              <Card.Img className='image1' variant="top" src={require(`../img/kane3.jpg`)} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>


    </>
  );
}

export default Login

