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

const All = () => {
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
                <Heading>Example Heading</Heading>
                <Text>Example Text</Text>
                <Button>Example Button</Button>
                <Img src="example.jpg" alt="Example Image" />
                <Link href="https://example.com">Example Link</Link>
              </Column>
            </Row>
          </Section>
          <Hr />
          <Section>
            <Row>
              <Column>
                <Preview>
                  <Heading>Example Preview Heading</Heading>
                  <Text>Example Preview Text</Text>
                </Preview>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default All;
