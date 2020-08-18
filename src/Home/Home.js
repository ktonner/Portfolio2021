import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './home.css'
import Decorations from '../Components/Decorations/Decorations'
import { motion } from "framer-motion";
import Contact from '../Components/Contact/index'



const Home = () => (
    <div>
        <Container>
            <Row>
            <Col xs={6} md={6} className='mx-auto'>
                <br></br>
                <Decorations />
                    <h1 className='title'>Kathleen Tonner</h1>
                    
                    <p><b>Full Stack Web Developer</b> using a background in content creation to create clean, comprehensive code. Earned a certificate in Full Stack Development from the University of Central Florida, with developed skills in JavaScript, CSS, and Node.js. Applied strong front-end development with React and collaboration skills on Social Media project 'Soapbox'. I am accustomed to working tight deadlines and adapting. Looking forward to contributing to a team’s success and making better digital products.
</p>
                
                <br></br>
                </Col>
                </Row>
                <Row>
                    <Col md={3} className='mx-auto p-5'>
                    <Contact />
                    </Col>
                </Row>
            
            <Col xs={2} md={2}>
               
            </Col>
        </Container>
    </div>
)

export default Home