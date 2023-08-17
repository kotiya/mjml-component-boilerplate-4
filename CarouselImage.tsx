import React from "react";
import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const CarouselImage = () => {
  return (
    <Html>
      <Head>
        <Font />
      </Head>
      <Body>
        <Container>
          <Section>
            <Row>
              <Column>
                <Img src="carousel-image.jpg" alt="Carousel Image" />
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default CarouselImage;
