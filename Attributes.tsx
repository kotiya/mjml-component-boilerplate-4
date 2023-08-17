import React from "react";
import { Text, Class, All } from "@react-email/components";

const Attributes = () => (
  <React.Fragment>
    <Text padding="0" />
    <Class name="blue" color="blue" />
    <Class name="big" font-size="20px" />
    <All font-family="Arial" />
  </React.Fragment>
);

export default Attributes;
