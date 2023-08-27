import * as React from "react";
import { Html, Body, Section, Column } from "@react-email/components";
import Carousel from "./Carousel.jsx";
import CarouselImage from "./CarouselImage.jsx";

export function CarouselemailEmail(props) {
  return (
    <Html>
      <Body>
        <Section>
          <Column>
            <Carousel>
              <CarouselImage />
              <CarouselImage />
              <CarouselImage />
            </Carousel>
          </Column>
        </Section>
      </Body>
    </Html>
  );
}

export default CarouselemailEmail;
