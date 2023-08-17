// Friendly Reminder: This snippet was produced with the assistance of an AI. Always double-check for your specific requirements.
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

const Hero = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Column>
            <Head>
              <Font font="Ubuntu, sans-serif" />
              <Font font="Roboto, sans-serif" />
            </Head>
            <Body>
              <Section>
                <Container>
                  <Row>
                    <Column>
                      <Heading
                        fontSize={32}
                        lineHeight={40}
                        fontWeight={700}
                        color="#000000"
                      >
                        Your Hero Heading
                      </Heading>
                      <Text
                        fontSize={16}
                        lineHeight={24}
                        fontWeight={400}
                        color="#000000"
                      >
                        Your Hero Subheading
                      </Text>
                      <Button
                        href="#"
                        fontSize={16}
                        lineHeight={24}
                        fontWeight={700}
                        color="#ffffff"
                        backgroundColor="#000000"
                      >
                        Your Hero Button
                      </Button>
                    </Column>
                  </Row>
                </Container>
              </Section>
            </Body>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export default Hero;
