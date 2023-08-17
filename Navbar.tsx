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
    <Html>
      <Head>
        <Font />
      </Head>
      <Body>
        <Container>
          <Section>
            <Row>
              <Column>
                <Heading>Navbar</Heading>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text>Navbar content goes here</Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Button>Button</Button>
              </Column>
            </Row>
            <Row>
              <Column>
                <Link>Link</Link>
              </Column>
            </Row>
            <Row>
              <Column>
                <Img src="navbar-image.jpg" alt="Navbar Image" />
              </Column>
            </Row>
            <Row>
              <Column>
                <Hr />
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Navbar;
