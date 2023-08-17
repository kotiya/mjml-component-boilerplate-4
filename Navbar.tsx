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

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Column>
            <Link href="#">
              <Text>Home</Text>
            </Link>
          </Column>
          <Column>
            <Link href="#">
              <Text>About</Text>
            </Link>
          </Column>
          <Column>
            <Link href="#">
              <Text>Contact</Text>
            </Link>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export default Navbar;
