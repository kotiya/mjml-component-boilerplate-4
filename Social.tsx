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

const Social = () => {
  return (
    <Html>
      <Head>
        <Font />
        <Tailwind />
      </Head>
      <Body>
        <Container>
          <Section>
            <Row>
              <Column>
                <Heading>Follow us on social media</Heading>
                <Hr />
              </Column>
            </Row>
            <Row>
              <Column>
                <Link href="https://www.facebook.com">
                  <Button>Facebook</Button>
                </Link>
              </Column>
              <Column>
                <Link href="https://www.twitter.com">
                  <Button>Twitter</Button>
                </Link>
              </Column>
              <Column>
                <Link href="https://www.instagram.com">
                  <Button>Instagram</Button>
                </Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Social;
