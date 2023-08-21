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
        <a href="/">Home</a>
      </Item>
      <Item align="right">
        <a href="/about">About</a>
      </Item>
      <Item align="right">
        <a href="/contact">Contact</a>
      </Item>
    </Box>
  );
};

export default Navbar;
