import React from "react";
import { Text } from "@react-email/components";

const AccordionTitle = ({ children }) => {
  return (
    <Text
      as="h3"
      fontSize={16}
      fontWeight="bold"
      lineHeight={1.5}
      color="#000000"
      style={{
        marginBottom: 0,
        marginTop: 0,
        padding: "10px 0",
        cursor: "pointer",
      }}
    >
      {children}
    </Text>
  );
};

export default AccordionTitle;
