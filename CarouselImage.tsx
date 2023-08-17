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
        <Tailwind />
      </Head>
      <Body>
        <Container>
          <Section>
            <Row>
              <Column>
                <Heading>Carousel Image</Heading>
                <Hr />
              </Column>
            </Row>
            <Row>
              <Column>
                <Img src="carousel-image.jpg" alt="Carousel Image" />
              </Column>
            </Row>
            <Row>
              <Column>
                <Text>This is a carousel image component.</Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Link href="#">Read More</Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default CarouselImage;
