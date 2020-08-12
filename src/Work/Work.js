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
    <Col className="mx-auto">
      <h1>Work</h1>
      <Projects/>
      </Col>
    </Row>
    </Container>
)

export default Work