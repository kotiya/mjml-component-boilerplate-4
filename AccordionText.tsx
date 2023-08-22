import React from "react";
import { Text } from "@react-email/components";

const AccordionText = ({ children }) => {
  return (
    <Text
      fontFamily="Open Sans, Helvetica, Arial, sans-serif"
      backgroundColor="#fafafa"
      padding="15px"
      color="#505050"
      fontSize="14px"
    >
      {children}
    </Text>
  );
};

export default AccordionText;
