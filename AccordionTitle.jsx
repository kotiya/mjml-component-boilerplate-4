import React from "react";
import { Text } from "@react-email/components";

const AccordionTitle = ({ children }) => {
  return (
    <Text
      as="h3"
      fontSize={16}
      fontWeight="bold"
      lineHeight={1.5}
      padding="10px 0"
      style={{
        margin: 0,
        cursor: "pointer",
        backgroundColor: "#dededd",
      }}
    >
      {children}
    </Text>
  );
};

export default AccordionTitle;
