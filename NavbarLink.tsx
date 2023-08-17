import React from "react";
import { Link, Text } from "@react-email/components";

const NavbarLink = ({ href, children }) => {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Text fontSize={16} color="#333" fontWeight="bold">
        {children}
      </Text>
    </Link>
  );
};

export default NavbarLink;
