import React, { useState } from "react";
import {
  Accordion,
  AccordionTitle,
  AccordionText,
} from "@react-email/components";

const AccordionElement = ({ title, text }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion>
      <AccordionTitle onClick={handleToggle}>{title}</AccordionTitle>
      {expanded && <AccordionText>{text}</AccordionText>}
    </Accordion>
  );
};

export default AccordionElement;
