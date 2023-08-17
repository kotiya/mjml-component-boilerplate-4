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
              <Text>This is a class component example.</Text>
              <Button>Click me</Button>
              <Hr />
              <Img src="https://example.com/image.jpg" alt="Example Image" />
              <Link href="https://example.com">Example Link</Link>
            </Column>
          </Row>
        </Container>
      </Body>
    </Html>
  );
};

export default Class;
