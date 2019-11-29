import React from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'

const spanStyle = {
  display: 'block',
  fontSize: `${12 / 16}rem`,
  lineHeight: '1.5',
  textAlign: 'center'
}

const Coordinates = ({ x, y }) => {
  return (
    <span style={spanStyle}>
      Coordinates: <br />
      {`{ x: ${x}, y: ${y} }`}
    </span>
  )
}

Coordinates.PropTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}
export default Coordinates
