# ThemeProvider (using new context api)

Check out the [final result](https://rwxm4w2qm4.codesandbox.io/)
to see the expected look and behavior.

Create a `ThemeProvider` component that controls state for the theme of a page
and passes it to children through context.

Create a `withTheme` higher-order component to connect components to the
`ThemeProvider` context.

Create a `ThemeSwitcher` component that changes which theme is currently
active.

Apply the theme to some content on the page.

## Tips

- this should use the existing context api, so `getChildContext` and `childContextTypes` need
  to be defined on the `ThemeProvider`
- make sure to pass the theme context on a unique key
- the hoc should handle setting up `contextTypes` to pull the right context and pass it to the
  component passed to it
- remember to put the active theme, as well as the handler to change the theme, in context
- both `ThemeSwitcher` and the page content will need to connect the context