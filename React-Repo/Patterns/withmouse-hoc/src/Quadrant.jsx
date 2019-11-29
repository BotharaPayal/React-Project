import React from 'react'
import PropTypes from 'prop-types'
import PositionIndicator from './PositionIndicator'

const Quadrant = ({ bgColor, indicatorColor, mouse }) => (
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
    <PositionIndicator color={indicatorColor} {...mouse} />
  </div>
)

Quadrant.propTypes = {
  bgColor: PropTypes.string,
  indicatorColor: PropTypes.string,
  mouse: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }).isRequired
}
export default Quadrant
