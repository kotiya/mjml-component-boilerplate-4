import React from "react";
import { Box, Item } from "@react-email/components";

const Layout = ({ children }) => {
  return (
    <Box width="100%" height="100%">
      <Item align="center">
        <Box width="600px">{children}</Box>
      </Item>
    </Box>
  );
};

export default Layout;
