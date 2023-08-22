import React from "react";
import { Box, Text } from "@react-email/components";

const AccordionTitle = ({ children }) => {
  return (
    <Box
      width="100%"
      backgroundColor="#f5f5f5"
      padding="10px"
      borderBottom="1px solid #ccc"
      cursor="pointer"
    >
      <Text fontSize="16px" fontWeight="bold">
        {children}
      </Text>
    </Box>
  );
};

export default AccordionTitle;
