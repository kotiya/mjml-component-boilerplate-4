import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@react-email/components";

const AccordionText = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Accordion>
      <AccordionItem>
        <AccordionButton onClick={toggleAccordion}>{title}</AccordionButton>
        <AccordionPanel isOpen={isOpen}>{content}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionText;
