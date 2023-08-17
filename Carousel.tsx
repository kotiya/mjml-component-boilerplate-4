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

const Carousel = () => {
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
                <Heading>Carousel Component</Heading>
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
                <Text>This is a carousel component.</Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Button>Click Me</Button>
              </Column>
            </Row>
            <Row>
              <Column>
                <Link href="https://example.com">Learn More</Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Carousel;
