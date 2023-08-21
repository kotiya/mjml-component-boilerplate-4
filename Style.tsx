import React from "react";
import { Style } from "@react-email/components";

const ReactStyle = ({ children }) => (
  <Style>
    {`
      /* Add your CSS styles here */
    `}
    {children}
  </Style>
);

export default ReactStyle;
