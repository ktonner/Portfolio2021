import React from 'react';
import Figure from 'react-bootstrap/Figure'


class Projects extends React.Component {
    render() {
      return (
        <div>
        <Figure>
        <Figure.Image
          width={400}
          height={200}
          alt="171x180"
          src={require('../assets/booklogger.png')}
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
        <Figure>
        <Figure.Image
          width={400}
          height={200}
          alt="171x180"
          src={require('../assets/booklogger.png')}
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
      <Figure>
        <Figure.Image
          width={400}
          height={200}
          alt="171x180"
          src={require('../assets/booklogger.png')}
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
      <Figure>
        <Figure.Image
          width={400}
          height={200}
          alt="171x180"
          src={require('../assets/booklogger.png')}
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
      </div>
      )
    }
  }

  export default Projects