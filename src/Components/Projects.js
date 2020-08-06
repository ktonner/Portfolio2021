import React from 'react';
import Figure from 'react-bootstrap/Figure'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { motion } from 'framer-motion'




class Projects extends React.Component {
    render() {
      return (
        <div>
          <Row>
        <motion.Figure
        className="mx-auto"
        whileHover={{
          scale:1.1,
          boxShadow: "0px 0px 8px rgb(255,255,255)"
        }}>
        <Figure.Image
          width={300}
          height={500}
          alt="171x180"
          src={require('../assets/soapbox.png')}
        />
        <Figure.Caption>
        Social media application that lets you create posts, follow others, or explore hashtags!
        </Figure.Caption>
        <Button>Github</Button> 
        <Button>Deployed</Button>
      </motion.Figure>
      <motion.Figure
      className="mx-auto"
        whileHover={{
          scale:1.1
        }}>
        <Figure.Image
          width={300}
          height={200}
          alt="171x180"
          src={require('../assets/booklogger.png')}
        />
        <Figure.Caption>
        Register as a user to track your favorite books.
        </Figure.Caption>
        <Button>Github</Button>
        <Button>Deployed</Button>
      </motion.Figure>
      <motion.Figure
      className="mx-auto"
        whileHover={{
          scale:1.1
        }}>
        <Figure.Image
          width={300}
          height={200}
          alt="171x180"
          src={require('../assets/notetaker.png')}
        />
        <Figure.Caption>
        Write down new notes, edit old ones, or delete them.
        </Figure.Caption>
      </motion.Figure>
      </Row>
      </div>
      )
    }
  }

  export default Projects