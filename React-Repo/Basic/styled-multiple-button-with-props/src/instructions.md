# Instructions
Create a styled button that has customizable text and style. Look at the final result for visual requirements.

See the final result [here](https://93q0m741qw.codesandbox.io/).

## Requirements

The button should:
- be styled like the final result
- have customizable text
- be customizable via a style object

## Approach

- Add the default button styles inside a `style` tag in *index.html*
- Use `children` to pass custom text to the button
- Use the `style` prop to pass through custom styles (make sure to pass this to the actual `button` element in your button component)

### FYI
When passing an attribute to an element (eg `button`), if the prop is `undefined` or `null`, the attribute won't be added to the html.

```javascript
const Btn = (props) => (
  <button style={props.style}>text</button>
)
```

In the example above, if no style object is passed via props, the style attribute will be ignored in the rendered html.