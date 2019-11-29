import React from 'react'
import PropTypes from 'prop-types'
import withTheme from './withTheme'

const style = {
  borderBottom: '1px solid #ccc',
  fontSize: `${13 / 16}rem`,
  padding: '8px 40px',
  textAlign: 'center'
}

const ThemeSwitcher = ({ theme, changeTheme }) => (
  <div style={style}>
    <label style={{ marginRight: '8px' }}>Theme:</label>
    <select value={theme.name} onChange={e => changeTheme(e.target.value)}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
)

ThemeSwitcher.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    background: PropTypes.string,
    color: PropTypes.string,
    name: PropTypes.string
  }).isRequired
}

export default withTheme(ThemeSwitcher)
