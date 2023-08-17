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

const AccordionText = () => {
  return (
    <Container>
      <Head>
        <Font />
      </Head>
      <Body>
        <Section>
          <Row>
            <Column>
              <Heading>AccordionText</Heading>
              <Text>This is the content of the AccordionText component.</Text>
            </Column>
          </Row>
        </Section>
      </Body>
    </Container>
  );
};

export default AccordionText;
