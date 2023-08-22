import React from "react";
import { Box } from "@react-email/components";

const Layout = ({ children }) => {
  return (
    <Box width="100%" height="100%" backgroundColor="#f7f7f7">
      {children}
    </Box>
  );
};

export default Layout;
