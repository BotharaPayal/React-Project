import React from "react";
import PropTypes from "prop-types";

const Circle = ({ x, y }) => {
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "red",
        position: "absolute",
        top: `${y}px`,
        left: `${x}px`
      }}
    />
  );
};

// const Circle = props => {
//   return (
//     <div
//       style={{
//         width: "20px",
//         height: "20px",
//         borderRadius: "50%",
//         backgroundColor: "red",
//         position: "absolute",
//         top: `${props.y}px`,
//         left: `${props.x}px`
//       }}
//     />
//   );
// };

Circle.PropTypes = {
  x: PropTypes.number,
  y: PropTypes.number
};

export default Circle;
