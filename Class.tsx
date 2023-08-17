import React from "react";
import { Html } from "@react-email/html";
import { Text } from "@react-email/components";

class Class extends React.Component {
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Text>Hello, World!</Text>
      </Html>
    );
  }
}

export default Class;
