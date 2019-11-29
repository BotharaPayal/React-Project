# `withMouse` HOC to `Mouse` render prop component

Convert the `withMouse` HOC to a `Mouse` component that uses a render prop.

Update the `Quadrant` component to accept children instead of including the
mouse coordinates and indicator itself. Update its prop api to remove
unnecessary props.

Create a `Coordinates` component to render the mouse coordinates as text (just
move the code from `Quadrant` to here and add propTypes.)

Update your main app to work with the new `Mouse` component, making use of
`PositionIndicator` and `Coordinates` directly inside the render prop.

Check out the [final result](https://zr2l1o77np.codesandbox.io/)
for visual acceptance criteria.