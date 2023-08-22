import React from "react";
import { Image, Link, Text } from "@react-email/components";

const SocialElement = ({ name, href, backgroundColor, src, label }) => {
  return (
    <Link href={href} style={{ backgroundColor }}>
      <Image src={src} alt={name} />
      {label && <Text>{label}</Text>}
    </Link>
  );
};

export default SocialElement;
