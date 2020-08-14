import React from "react";
import posed from 'react-pose';
import './style.css'

const Circle = posed.div({
    attention: {
      scale: 1.3,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 0
      }
    }
  })

  const Box = posed.div({
    left: { x: -100 },
    right: { x: 100 }
  })

class Decorations extends React.Component {

    render() {
        return (
          <div>
            <Box className='triangle'/>
            <Circle className='circle'/>
            <Box className='trapezoid'/>

            </div>
        )
    }
}

export default Decorations