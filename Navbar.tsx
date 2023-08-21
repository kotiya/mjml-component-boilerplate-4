import React from "react";
import { Box, Item } from "@react-email/components";

const Navbar = () => {
  return (
    <Box
      width="100%"
      height="50px"
      backgroundColor="#f2f2f2"
      padding="10px"
      borderBottom="1px solid #ccc"
    >
      <Item align="left">
        <Box width="100px" height="30px" backgroundColor="#333" />
      </Item>
      <Item align="right">
        <Box
          width="30px"
          height="30px"
          backgroundColor="#333"
          marginRight="10px"
        />
        <Box
          width="30px"
          height="30px"
          backgroundColor="#333"
          marginRight="10px"
        />
        <Box width="30px" height="30px" backgroundColor="#333" />
      </Item>
    </Box>
  );
};

export default Navbar;
