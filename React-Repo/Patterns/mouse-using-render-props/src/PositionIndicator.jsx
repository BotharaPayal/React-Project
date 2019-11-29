import React from 'react'
import PropTypes from 'prop-types'

const PositionIndicator = ({ x, y, color }) => (
  <div
    style={{
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: color,
      position: 'absolute',
      top: `${y}px`,
      left: `${x}px`,
      transform: 'translate(-50%, -50%)'
    }}
  />
)

PositionIndicator.propTypes = {
  color: PropTypes.string,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

PositionIndicator.defaultProps = {
  color: 'red'
}

export default PositionIndicator
