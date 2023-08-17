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
        {/* Your component code goes here */}
        <Container>
          <Row>
            <Column>
              <Heading>Class Component</Heading>
              <Text>
                This is a class component created using the basic components
                from the @react-email/components library.
              </Text>
              <Button>Click me</Button>
              <Img src="https://example.com/image.jpg" alt="Example Image" />
              <Link href="https://example.com">Visit Example Website</Link>
              <Hr />
              <Section>
                <Heading>Section Title</Heading>
                <Text>This is a section within the class component.</Text>
              </Section>
            </Column>
          </Row>
        </Container>
      </Body>
    </Html>
  );
};

export default Class;
