import React from 'react'
import PropTypes from 'prop-types'
import PositionIndicator from './PositionIndicator'

const Quadrant = ({ bgColor, children }) => (
  <div
    style={{
      width: '50vw',
      height: '50vh',
      backgroundColor: bgColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      float: 'left',
      overflow: 'hidden',
      position: 'relative'
    }}
  >
    {children}
  </div>
)

Quadrant.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.any
}

Quadrant.defaultProps = {
  bgColor: 'white'
}

export default Quadrant
