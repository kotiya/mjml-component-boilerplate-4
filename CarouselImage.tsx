import React from "react";
import { Image } from "@react-email/components";

const CarouselImage = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width="600"
      height="400"
      style={{
        display: "block",
        maxWidth: "100%",
        height: "auto",
        margin: "0 auto",
      }}
    />
  );
};

export default CarouselImage;
