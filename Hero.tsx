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

const Hero = () => {
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
                <Heading>Hero Component</Heading>
                <Text>This is the Hero component.</Text>
                {/* Add your content here */}
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Hero;
