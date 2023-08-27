import React from "react";
import { Box, Item } from "@react-email/components";

const Layout = ({ children }) => (
  <Box width="100%">
    <Item>{children}</Item>
  </Box>
);

export default Layout;
