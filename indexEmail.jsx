import * as React from "react";
import { Html, Body, Section, Column, Text } from "@react-email/components";
import BasicComponent from "./BasicComponent.jsx";
import ImageText from "./ImageText.jsx";
import Layout from "./Layout.jsx";

export function IndexemailEmail(props) {
  return (
    <Html>
      <Body>
        <Section>
          <Column>
            <BasicComponent>I'm among stars</BasicComponent>
          </Column>
        </Section>
        <ImageText>MJML rules! hello modified</ImageText>
        <Layout>
          <Text style={{ color: "blue", fontSize: "10px" }}>
            A super nice layout component
          </Text>
        </Layout>
      </Body>
    </Html>
  );
}

export default IndexemailEmail;
