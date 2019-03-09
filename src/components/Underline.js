import React from "react";

const Underline = props => {
  let styles;
  if (props.hoverState)
    styles = {
      width: props.hoverState.width,
      left: props.hoverState.left,
    };
  else
    styles = {
      width: props.defaultState.width,
      left: props.defaultState.left,
    };

  return <div className="underline" style={styles} />;
};

export default Underline;
