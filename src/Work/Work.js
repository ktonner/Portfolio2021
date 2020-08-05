import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './pcss.css'
import Projects from '../Components/Projects'

const Work = () => (
    <Container>
    <Row>
      <Col xs={3} md={3} style={{float:'left'}}>
        <Row>
    <Col xs={1} md={1} className="skills">
    <h3>Languages</h3>
      <p>HTML</p>
      <p>CSS</p>
      <p>Javascript</p>
      <p>Node.js</p>
      <p>SQL</p>
    </Col>
    <Col xs={1} md={1}className="mx-auto skills">
    <h3>Applications</h3>
    <p>MySQL</p>
    <p>MongoDB</p>
    <p>Express</p>
    <p>Handlebars</p>
    <p>React</p>
    <p>Mongoose</p>
    </Col>
    </Row>
    </Col>
    <Col xs={9} md={9}className="mx-auto">
      <h1>Box</h1>
      <Projects/>
      </Col>
    </Row>
    </Container>
)

export default Work