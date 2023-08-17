import React from "react";
import { Box, Item } from "@react-email/components";

const Layout = ({ children }) => {
  return (
    <Box width="100%" align="center">
      <Item align="center" width="600px">
        {children}
      </Item>
    </Box>
  );
};

export default Layout;
