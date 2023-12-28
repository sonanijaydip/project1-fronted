import React from 'react'
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';



function About() {
  return (
    <div>
      <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={require(`../img/kane1.jpg`)} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={require(`../img/kane3.jpg`)} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={require(`../img/kane2.jpg`)} thumbnail />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default About
