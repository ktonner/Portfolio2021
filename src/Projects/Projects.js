import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Projects = () => (
    <Container style={{position:"relative",top:"15%", left:"-10%"}}>
    <Row>
    <Col xs={6} md={4} className="mx-auto">
    <h5>Languages</h5>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>Node.js</li>
      <li>SQL</li>
    </ul>
    </Col>
    <Col xs={6} md={4}className="mx-auto">
      <h5>Applications</h5>
    <ul>
    <li>MySQL</li>
    <li>MongoDB</li>
    <li>Express</li>
    <li>Handlebars</li>
    <li>React</li>
    <li>Mongoose</li>
    </ul>
    </Col>
    </Row>
    </Container>
)

export default Projects