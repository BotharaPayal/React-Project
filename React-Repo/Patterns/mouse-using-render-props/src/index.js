import React from 'react'
import { render } from 'react-dom'
import Quadrant from './Quadrant'
import Coordinates from './Coordinates'
import PositionIndicator from './PositionIndicator'
import Mouse from './Mouse'
import './style.css'

const App = () => (
  <React.Fragment>
    {/* <div>Fix this!</div> */}
    <Mouse
      render={mouse => (
        <Quadrant bgColor="pink">
          <Coordinates {...mouse} />
          <PositionIndicator {...mouse} />
        </Quadrant>
      )}
    />
    <Mouse
      render={mouse => (
        <Quadrant bgColor="#666">
          <Coordinates {...mouse} />
          <PositionIndicator color="white" {...mouse} />
        </Quadrant>
      )}
    />
    <Mouse
      render={mouse => (
        <Quadrant bgColor="powderblue">
          <Coordinates {...mouse} />
          <PositionIndicator {...mouse} />
        </Quadrant>
      )}
    />
    <Mouse
      render={mouse => (
        <Quadrant bgColor="yellow">
          <Coordinates {...mouse} />
          <PositionIndicator {...mouse} />
        </Quadrant>
      )}
    />
    {/*
    <Quad1 bgColor="pink" />
    <Quad2 bgColor="#666" indicatorColor="white" />
    <Quad3 bgColor="powderblue" indicatorColor="blue" />
    <Quad4 bgColor="yellow" indicatorColor="goldenrod" />
    */}
  </React.Fragment>
)

render(<App />, document.getElementById('root'))
