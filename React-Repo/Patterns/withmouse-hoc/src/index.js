import React from 'react'
import { render } from 'react-dom'
import Quadrant from './Quadrant'
import withMouse from './withMouse'
import './style.css'

const Quad1 = withMouse(Quadrant)
const Quad2 = withMouse(Quadrant)
const Quad3 = withMouse(Quadrant)
const Quad4 = withMouse(Quadrant)
const App = () => (
  <React.Fragment>
    <Quad1 bgColor="pink" />
    <Quad2 bgColor="yellow" />
    <Quad3 bgColor="blue" />
    <Quad4 bgColor="white" />
  </React.Fragment>
)

render(<App />, document.getElementById('root'))
