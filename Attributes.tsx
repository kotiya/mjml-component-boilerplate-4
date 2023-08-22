import React from "react";
import { Box, Text } from "@react-email/components";

const Attributes = ({ attributes }) => {
  return (
    <Box>
      {attributes.map((attribute, index) => (
        <Box key={index} mb={10}>
          <Text fontSize={14} fontWeight="bold" mb={5}>
            {attribute.name}
          </Text>
          <Text fontSize={12}>{attribute.value}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default Attributes;
