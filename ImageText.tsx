import React from "react";
import { Image, Box, Text } from "@react-email/components";

const ImageText = ({ src, alt, text }) => {
  return (
    <Box>
      <Image src={src} alt={alt} />
      <Text>{text}</Text>
    </Box>
  );
};

export default ImageText;
