import React from "react";
import { Box, Column, Divider, Image, Text } from "@react-email/components";

const Layout = ({ children }) => {
  return (
    <Box width="600px" align="center" style={{ margin: "0 auto" }}>
      <Column>
        <Image
          src="https://example.com/logo.png"
          alt="Logo"
          width={200}
          height={100}
        />
        <Divider height={20} />
        <Text fontSize={20} fontWeight="bold">
          Welcome to our newsletter!
        </Text>
        <Divider height={20} />
        {children}
        <Divider height={20} />
        <Text fontSize={12} color="#999999">
          © 2022 Company Name. All rights reserved.
        </Text>
      </Column>
    </Box>
  );
};

export default Layout;
