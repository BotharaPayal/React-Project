import React from 'react'
import { render } from 'react-dom'
import ThemeProvider, { ThemeContext } from './ThemeProvider'
import ThemeSwitcher from './ThemeSwitcher'
import './style.css'

const baseStyle = {
  flex: '1',
  padding: '40px'
}

const mainStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column'
}

const App = () => (
  <ThemeProvider>
    <main style={mainStyle}>
      <ThemeSwitcher />
      <ThemeContext.Consumer>
        {({ theme: { name, ...style } }) => (
          <div style={{ ...baseStyle, ...style }}>
            <p>This is text styled by different theme</p>
          </div>
        )}
      </ThemeContext.Consumer>
    </main>
  </ThemeProvider>
)

render(<App />, document.getElementById('root'))
