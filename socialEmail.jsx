import * as React from "react";
import { Html, Body, Section, Column } from "@react-email/components";
import Social from "./Social.jsx";
import SocialElement from "./SocialElement.jsx";

export function SocialemailEmail(props) {
  return (
    <Html>
      <Body>
        <Section>
          <Column>
            <Social>
              <SocialElement>Facebook</SocialElement>
              <SocialElement>Google</SocialElement>
              <SocialElement>Twitter</SocialElement>
            </Social>
          </Column>
        </Section>
      </Body>
    </Html>
  );
}

export default SocialemailEmail;
