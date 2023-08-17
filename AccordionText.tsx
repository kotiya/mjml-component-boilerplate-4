import React from "react";
import { Box } from "@react-email/components";

const AccordionText = ({ children }) => {
  return (
    <Box
      fontFamily="Open Sans, Helvetica, Arial, sans-serif"
      backgroundColor="#fafafa"
      padding="15px"
      color="#505050"
      fontSize="14px"
    >
      {children}
    </Box>
  );
};

export default AccordionText;
