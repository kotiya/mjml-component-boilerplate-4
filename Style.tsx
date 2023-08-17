import React from "react";

const Style = ({ children, ...props }) => {
  return <style {...props}>{children}</style>;
};

export default Style;
