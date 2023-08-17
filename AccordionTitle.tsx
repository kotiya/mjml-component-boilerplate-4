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

const AccordionTitle = () => {
  return (
    <Container>
      <Head>
        <Font />
      </Head>
      <Body>
        <Section>
          <Row>
            <Column>
              <Heading>Accordion Title</Heading>
              {/* Add your content here */}
            </Column>
          </Row>
        </Section>
      </Body>
    </Container>
  );
};

export default AccordionTitle;
