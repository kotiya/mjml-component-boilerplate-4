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

const Style = () => {
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
                <Heading>Style Component</Heading>
                <Text>This is the Style component.</Text>
                <Button>Click me</Button>
                <Img src="https://example.com/image.jpg" alt="Example Image" />
                <Link href="https://example.com">Example Link</Link>
                <Hr />
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Style;
