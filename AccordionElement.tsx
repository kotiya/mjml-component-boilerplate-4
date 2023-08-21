import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@react-email/components";

const AccordionElement = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionItemClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <Accordion>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionButton onClick={() => handleAccordionItemClick(index)}>
            {item.title}
          </AccordionButton>
          <AccordionPanel isOpen={index === activeIndex}>
            {item.content}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionElement;
