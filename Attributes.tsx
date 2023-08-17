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

const Attributes = () => {
  return (
    <Html>
      <Head>
        <Font />
      </Head>
      <Body>
        <Container>
          <Section>
            <Heading>Attributes Component</Heading>
            <Text>This is the Attributes component.</Text>
            {/* Add your custom code here */}
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Attributes;
