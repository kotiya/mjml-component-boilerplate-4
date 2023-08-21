import React from "react";
import { Box, Text } from "@react-email/components";

const AccordionTitle = ({ title }) => {
  return (
    <Box>
      <Text fontSize={16} fontWeight="bold">
        {title}
      </Text>
    </Box>
  );
};

export default AccordionTitle;
