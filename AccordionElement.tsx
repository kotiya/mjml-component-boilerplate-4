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

const AccordionElement = () => {
  return (
    <Container>
      <Head>
        <Font />
      </Head>
      <Body>
        <Section>
          <Row>
            <Column>
              <Heading>Accordion Element</Heading>
              <Text>
                This is the content of the AccordionElement component.
              </Text>
              <Button>Click me</Button>
            </Column>
          </Row>
        </Section>
      </Body>
    </Container>
  );
};

export default AccordionElement;
