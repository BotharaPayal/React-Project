import React from 'react'
import { render } from 'react-dom'
import ThemeProvider from './ThemeProvider'
import ThemeSwicther from './ThemeSwitcher'
import Content from './Content'
import './style.css'

const mainStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column'
}

const App = () => (
  <ThemeProvider>
    <main style={mainStyle}>
      <ThemeSwicther />
      <Content />
    </main>
  </ThemeProvider>
)

render(<App />, document.getElementById('root'))
