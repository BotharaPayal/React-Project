import React from 'react'
import PropTypes from 'prop-types'
import withTheme from './withTheme'

const baseStyle = {
  flex: '1',
  padding: '40px'
}

const Content = ({ theme: { name, ...style } }) => (
  <div style={{ ...baseStyle, ...style }}>
    <p>This is text styles by theme</p>
  </div>
)

Content.propTypes = {
  theme: PropTypes.shape({
    background: PropTypes.string,
    color: PropTypes.string,
    name: PropTypes.string
  })
}

export default withTheme(Content)
