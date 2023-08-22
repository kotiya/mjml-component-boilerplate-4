import React from "react";
import { Box, Text } from "@react-email/components";

const Attributes = ({ attributes }) => {
  return (
    <Box>
      {attributes.map((attribute, index) => (
        <Text key={index}>
          {attribute.name}={attribute.value}
        </Text>
      ))}
    </Box>
  );
};

export default Attributes;
