import React from "react";
import { NavbarLink } from "@react-email/components";

const Navbar = () => {
  return (
    <nav>
      <NavbarLink href="/gettings-started-onboard" color="#ffffff">
        Getting started
      </NavbarLink>
      <NavbarLink href="/try-it-live" color="#ffffff">
        Try it live
      </NavbarLink>
      <NavbarLink href="/templates" color="#ffffff">
        Templates
      </NavbarLink>
      <NavbarLink href="/components" color="#ffffff">
        Components
      </NavbarLink>
    </nav>
  );
};

export default Navbar;
