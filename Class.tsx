import React from "react";
import { Html, Head, Body } from "@react-email/components";

class MjClass extends React.Component {
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>{/* Add any necessary head elements */}</Head>
        <Body>{/* Add your email content here */}</Body>
      </Html>
    );
  }
}

export default MjClass;
