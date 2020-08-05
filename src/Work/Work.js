import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './pcss.css'
import Projects from './Projects'

const Work = () => (
    <Container>
    <Row>
    <Col xs={2} md={2} className="mx-auto">
    <h2>Languages</h2>
      <p>HTML</p>
      <p>CSS</p>
      <p>Javascript</p>
      <p>Node.js</p>
      <p>SQL</p>
    </Col>
    <Col xs={2} md={2}className="mx-auto">
    <h2>Applications</h2>
    <p>MySQL</p>
    <p>MongoDB</p>
    <p>Express</p>
    <p>Handlebars</p>
    <p>React</p>
    <p>Mongoose</p>
    </Col>
    <Col xs={8} md={8}className="mx-auto">
      <h1>Box</h1>
      <Projects></Projects>
      </Col>
    </Row>
    </Container>
)

export default Work