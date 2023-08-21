import React from "react";
import { Box, Image, Text, Link } from "@react-email/components";

const SocialElement = ({ src, alt, href, title }) => (
  <Box width="24px" height="24px" mr="8px">
    <Link href={href} title={title} textDecoration="none">
      <Image src={src} alt={alt} width="100%" height="100%" />
    </Link>
  </Box>
);

export default SocialElement;
