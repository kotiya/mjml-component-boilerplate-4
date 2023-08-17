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
            <Row>
              <Column>
                <Heading>Attributes Component</Heading>
                <Text>This is the Attributes component.</Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Hr />
              </Column>
            </Row>
            <Row>
              <Column>
                <Text>Here are some attributes:</Text>
                <ul>
                  <li>Attribute 1</li>
                  <li>Attribute 2</li>
                  <li>Attribute 3</li>
                </ul>
              </Column>
            </Row>
            <Row>
              <Column>
                <Button>Click me</Button>
              </Column>
            </Row>
            <Row>
              <Column>
                <Img src="https://example.com/image.jpg" alt="Example Image" />
              </Column>
            </Row>
            <Row>
              <Column>
                <Link href="https://example.com">Visit Example Website</Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Attributes;
