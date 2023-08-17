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

const SocialElement = () => {
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
                <Heading>My Social Element</Heading>
                <Text>This is my social element component.</Text>
                {/* Add your social element content here */}
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default SocialElement;
