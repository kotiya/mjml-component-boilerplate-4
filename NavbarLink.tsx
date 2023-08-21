import React from "react";
import { A } from "@react-email/components";

const NavbarLink = ({ href, children }) => {
  return (
    <A
      href={href}
      textDecoration="none"
      color="#000000"
      fontSize="16px"
      lineHeight="24px"
    >
      {children}
    </A>
  );
};

export default NavbarLink;
