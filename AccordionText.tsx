import React from "react";
import { Box, Text } from "@react-email/components";

const AccordionText = ({ title, content }) => {
  return (
    <Box>
      <Text>{title}</Text>
      <Text>{content}</Text>
    </Box>
  );
};

export default AccordionText;
