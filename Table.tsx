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

const Table = () => {
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
                <Heading>Table Component</Heading>
                <Text>This is the Table component.</Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <TableContent />
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const TableContent = () => {
  return <Table>{/* Table content goes here */}</Table>;
};

export default Table;
