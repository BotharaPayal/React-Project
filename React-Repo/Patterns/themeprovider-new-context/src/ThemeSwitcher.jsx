import React from 'react'
import { ThemeContext } from './ThemeProvider'

const style = {
  borderBottom: '1px solid #ccc',
  fontSize: `${13 / 16}rem`,
  padding: '8px 40px',
  textAlign: 'center'
}

const ThemeSwitcher = () => (
  <ThemeContext.Consumer>
    {({ theme, changeTheme }) => (
      <div style={style}>
        <label style={{ marginRight: '8px' }}>Theme:</label>
        <select value={theme.name} onChange={e => changeTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    )}
  </ThemeContext.Consumer>
)

export default ThemeSwitcher
