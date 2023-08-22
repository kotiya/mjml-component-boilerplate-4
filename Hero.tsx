import React from "react";
import { Box, Image, Text } from "@react-email/components";

const Hero = ({ imageUrl, title, subtitle }) => {
  return (
    <Box width="100%">
      <Image src={imageUrl} alt="Hero Image" width="100%" height="auto" />
      <Box p={4}>
        <Text fontSize={24} fontWeight="bold" mb={2}>
          {title}
        </Text>
        <Text fontSize={16}>{subtitle}</Text>
      </Box>
    </Box>
  );
};

export default Hero;
