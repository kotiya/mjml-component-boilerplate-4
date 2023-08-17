import React from "react";
import { Html } from "@react-email/html";
import { Text } from "@react-email/components";

class MjClass extends React.Component {
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Text
          fontSize={16}
          lineHeight={1.5}
          color="#000000"
          fontFamily="Arial, sans-serif"
        >
          {/* Your content here */}
        </Text>
      </Html>
    );
  }
}

export default MjClass;
