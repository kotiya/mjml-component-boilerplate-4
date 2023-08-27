import * as React from "react";
import {
  Html,
  Head,
  Text,
  Body,
  Section,
  Column,
} from "@react-email/components";
import Attributes from "./Attributes.jsx";
import Class from "./Class.jsx";
import All from "./All.jsx";

export function HelloworldemailEmail(props) {
  return (
    <Html>
      <Head>
        <Attributes>
          <Text style={{ padding: "0" }} />
          <Class />
          <Class />
          <All />
        </Attributes>
      </Head>
      <Body>
        <Section>
          <Column>
            <Text attributes={{ mjClass: "blue big" }}>Hello World!</Text>
          </Column>
        </Section>
      </Body>
    </Html>
  );
}

export default HelloworldemailEmail;
