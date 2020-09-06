import React from "react";

type Return = [{ onMouseEnter: () => void; onMouseLeave: () => void }, boolean];

export default (initialState?: boolean): Return => {
  const [isHovered, hover] = React.useState(!!initialState);
  const handleHover = () => ({
    onMouseEnter: () => hover(true),
    onMouseLeave: () => hover(false)
  });
  return [handleHover(), isHovered];
};
