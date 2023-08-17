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
                <Text>This is the Layout component.</Text>
              </Column>
            </Row>
          </Section>
          <Section>
            <Row>
              <Column>
                <Text>Here are some basic components:</Text>
                <Button>Button</Button>
                <Hr />
                <Img src="https://example.com/image.jpg" alt="Example Image" />
                <Link href="https://example.com">Link</Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Layout;
