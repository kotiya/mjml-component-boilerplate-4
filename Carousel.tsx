import React, { useState } from "react";
import { Box, Image, Text } from "@react-email/components";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <Box>
      <Image src={images[currentImageIndex]} alt="Carousel Image" />
      <Box>
        <Text>
          {currentImageIndex + 1} / {images.length}
        </Text>
        <button onClick={handlePrevImage}>Previous</button>
        <button onClick={handleNextImage}>Next</button>
      </Box>
    </Box>
  );
};

export default Carousel;
