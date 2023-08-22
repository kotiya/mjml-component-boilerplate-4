import React from "react";
import { Carousel, CarouselItem, Image } from "@react-email/components";

const MyCarousel = () => {
  return (
    <Carousel>
      <CarouselItem>
        <Image src="https://example.com/image1.jpg" alt="Image 1" />
      </CarouselItem>
      <CarouselItem>
        <Image src="https://example.com/image2.jpg" alt="Image 2" />
      </CarouselItem>
      <CarouselItem>
        <Image src="https://example.com/image3.jpg" alt="Image 3" />
      </CarouselItem>
    </Carousel>
  );
};

export default MyCarousel;
