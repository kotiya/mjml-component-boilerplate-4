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

const Layout = () => {
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
                <Heading>Layout Component</Heading>
                <Text>This is the content of the Layout component.</Text>
                <Button>Click me</Button>
                <Img src="image.jpg" alt="Image" />
                <Link href="https://example.com">Visit Example</Link>
              </Column>
            </Row>
          </Section>
          <Hr />
          <Section>
            <Row>
              <Column>
                <Text>Another section in the Layout component.</Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Layout;
