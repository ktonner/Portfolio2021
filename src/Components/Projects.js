import React from 'react';
import Figure from 'react-bootstrap/Figure'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'


class Projects extends React.Component {
    render() {
      return (
        <div>
          <Row>
        <Figure>
        <Figure.Image
          width={400}
          height={500}
          alt="171x180"
          src={require('../assets/soapbox.png')}
        />
        <Figure.Caption>
        Social media application that lets you create posts, follow others, or explore hashtags!
        </Figure.Caption>
        <Button>Github</Button> 
        <Button>Deployed</Button>
      </Figure>
        <Figure>
        <Figure.Image
          width={400}
          height={200}
          alt="171x180"
          src={require('../assets/booklogger.png')}
        />
        <Figure.Caption>
        Register as a user to track your favorite books.
        </Figure.Caption>
        <Button>Github</Button>
        <Button>Deployed</Button>
      </Figure>
      </Row>
      <Row>
      <Figure>
        <Figure.Image
          width={400}
          height={100}
          alt="171x180"
          src={require('../assets/budget.jpg')}
        />
        <Figure.Caption>
        Keep track of your budget with a dynamic graph.
        </Figure.Caption>
        <Button>Github</Button>
        <Button>Deployed</Button>
      </Figure>
      <Figure>
        <Figure.Image
          width={400}
          height={200}
          alt="171x180"
          src={require('../assets/notetaker.png')}
        />
        <Figure.Caption>
        Write down new notes, edit old ones, or delete them.
        </Figure.Caption>
      </Figure>
      </Row>
      </div>
      )
    }
  }

  export default Projects