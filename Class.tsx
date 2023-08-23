import React from "react";
import { Box, Text } from "@react-email/components";

class MjClass extends React.Component {
  render() {
    const { children, name, cssClass } = this.props;

    return (
      <Box className={cssClass}>
        <Text className={name}>{children}</Text>
      </Box>
    );
  }
}

export default MjClass;
