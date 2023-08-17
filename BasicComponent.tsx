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

const BasicComponent = () => {
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
                <Heading>Basic Component</Heading>
                <Text>
                  This is a basic component using @react-email/components.
                </Text>
                <Button>Click me</Button>
                <Img src="https://example.com/image.jpg" alt="Example Image" />
                <Link href="https://example.com">Visit Example</Link>
              </Column>
            </Row>
          </Section>
          <Hr />
          <Section>
            <Row>
              <Column>
                <Preview>
                  <Text>This is a preview section.</Text>
                </Preview>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default BasicComponent;
