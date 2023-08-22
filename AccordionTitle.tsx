import React from "react";
import { Text } from "@react-email/components";

const AccordionTitle = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default AccordionTitle;
