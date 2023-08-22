import React from "react";
import { A } from "@react-email/components";

const SocialElement = ({ name, href, children }) => {
  return (
    <A href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </A>
  );
};

export default SocialElement;
