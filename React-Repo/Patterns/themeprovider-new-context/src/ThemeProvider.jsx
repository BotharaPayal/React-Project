import React from 'react'

const themes = {
  light: {
    background: 'white',
    color: 'black',
    name: 'light'
  },
  dark: {
    background: 'black',
    color: 'white',
    name: 'dark'
  }
}

export const ThemeContext = React.createContext()

export default class ThemeProvider extends React.Component {
  state = {
    theme: 'light'
  }
  changeTheme = theme => {
    this.setState({ theme })
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{
          changeTheme: this.changeTheme,
          theme: themes[this.state.theme]
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
