import React from "react";
import { Box } from "@react-email/components";

const AccordionTitle = ({ children }) => {
  return (
    <Box
      fontFamily="Roboto, Open Sans, Helvetica, Arial, sans-serif"
      backgroundColor="#fff"
      color="#031017"
      padding="15px"
      fontSize="18px"
    >
      {children}
    </Box>
  );
};

export default AccordionTitle;
