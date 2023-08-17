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

const ImageText = () => {
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
                <Img src="https://example.com/image.jpg" alt="Image" />
              </Column>
              <Column>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vitae justo nec nisl aliquam tincidunt. Nulla facilisi. Sed
                  euismod, nunc id aliquet tincidunt, nisl nunc tincidunt nunc,
                  id lacinia nunc nunc id nunc. Sed vitae justo nec nisl aliquam
                  tincidunt. Nulla facilisi. Sed euismod, nunc id aliquet
                  tincidunt, nisl nunc tincidunt nunc, id lacinia nunc nunc id
                  nunc.
                </Text>
                <Button>Read More</Button>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ImageText;
