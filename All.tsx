import React from "react";
import { Box, Column, Divider, Image, Text } from "@react-email/components";

const All = ({ children }) => (
  <Box>
    <Column>
      {children.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {index !== children.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </Column>
  </Box>
);

export default All;
