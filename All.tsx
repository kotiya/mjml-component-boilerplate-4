import React from "react";
import { Box, Column, Divider, Text } from "@react-email/components";

const All = ({ children }) => (
  <Box>
    <Column>
      {React.Children.map(children, (child, index) => (
        <React.Fragment key={index}>
          {child}
          {index !== children.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </Column>
  </Box>
);

export default All;
