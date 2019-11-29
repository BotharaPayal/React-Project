# Controlled Form w/context

Check out the [final result](https://6lmp3935mz.codesandbox.io/)
to see the expected look and behavior.

Convert the existing `ControlledForm`, `Field` and `FormSubmit` to use context.

## Tips

- remove all usage of `React.Children` and `cloneElement`
- remove the `displayName` from the child components (not neccessary anymore)
- use `getChildContext` and `childContextTypes` on the form to pass the data and handlers to context
    - it is a good idea to group all handlers into a single object so they can be spread onto components that need them
- remember to define `contextTypes` for all components that need to consume the form data
- you'll need to bring back the `fields` prop on the form to set up initial state
- the fields no longer need to be direct children of the form, so you can break out the rows and other things as you see fit