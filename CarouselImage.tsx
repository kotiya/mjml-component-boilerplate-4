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
                <Heading>CarouselImage Component</Heading>
                <Hr />
                <Img src="carousel-image.jpg" alt="Carousel Image" />
                <Text>This is a CarouselImage component.</Text>
                <Button>Click me</Button>
                <Link href="https://example.com">Visit website</Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default CarouselImage;
