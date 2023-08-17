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

const Social = () => {
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
                <Heading>My Social Component</Heading>
                <Text>This is my social component.</Text>
                <Button>Click me</Button>
                <Img src="https://example.com/image.jpg" alt="Social Image" />
                <Link href="https://example.com">Visit my website</Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Social;
