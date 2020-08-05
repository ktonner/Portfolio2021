import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './pcss.css'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'

const Work = () => (
    <Container>
    <Row>
      <Col xs={3} md={3} style={{float:'left'}}>
        <Row>
      <Skills/>
   
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