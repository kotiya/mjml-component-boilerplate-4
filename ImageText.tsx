import React from "react";
import { Image, Box, Text } from "@react-email/components";

const ImageText = ({ src, alt, text }) => {
  return (
    <Box>
      <Image src={src} alt={alt} width={300} height={200} />
      <Text>{text}</Text>
    </Box>
  );
};

export default ImageText;
