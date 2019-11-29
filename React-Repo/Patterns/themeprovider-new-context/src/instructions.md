# ThemeProvider (using new context api)

Check out the [final result](https://m5q79oq8y8.codesandbox.io/)
to see the expected look and behavior.

Create a `ThemeProvider` component that controls state/context for
the theme of a page.

Create a `ThemeSwitcher` component that changes which theme is currently
active.

Apply the theme to some content on the page.

## Tips

- remember to export the context object created via `React.createContext` so it can be used to consume the context
- remember to put the active theme, as well as the handler to change the theme, in context
- both `ThemeSwitcher` and the page content will need to consume the context