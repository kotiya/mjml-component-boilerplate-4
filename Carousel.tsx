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
    <Container>
      <Head>
        <Font />
      </Head>
      <Body>
        <Section>
          <Row>
            <Column>
              <Heading>Carousel Component</Heading>
              <Text>This is the Carousel component.</Text>
            </Column>
          </Row>
          <Row>
            <Column>
              <Text>Carousel content goes here.</Text>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button>Previous</Button>
              <Button>Next</Button>
            </Column>
          </Row>
        </Section>
      </Body>
    </Container>
  );
};

export default Carousel;
