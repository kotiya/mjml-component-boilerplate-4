import React, { useState } from "react";
import { Text, Box } from "@react-email/components";

const AccordionElement = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Text onClick={toggleAccordion}>{title}</Text>
      {expanded && <Box>{children}</Box>}
    </Box>
  );
};

export default AccordionElement;
