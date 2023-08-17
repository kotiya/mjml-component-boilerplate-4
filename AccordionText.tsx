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
              <Heading>Accordion Text</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                auctor, nunc id ultricies tincidunt, nunc libero tincidunt urna,
                id lacinia nunc nisl id nunc.
              </Text>
              <Button>Toggle</Button>
              <Hr />
              <Text>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nullam auctor, nunc id ultricies
                tincidunt, nunc libero tincidunt urna, id lacinia nunc nisl id
                nunc.
              </Text>
            </Column>
          </Row>
        </Section>
      </Body>
    </Container>
  );
};

export default AccordionText;
