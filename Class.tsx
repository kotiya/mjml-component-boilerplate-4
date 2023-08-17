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

const Class = () => {
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
                <Heading>Class Component</Heading>
                <Text>This is a class component example.</Text>
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
                <Link href="https://example.com">Visit website</Link>
              </Column>
            </Row>
            <Row>
              <Column>
                <Hr />
              </Column>
            </Row>
            <Row>
              <Column>
                <Preview>
                  <Text>This is a preview text.</Text>
                </Preview>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Class;
