import React, { useState } from "react";
import { Box, Text } from "@react-email/components";

const Accordion = ({ elements }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Box>
      {elements.map((element, index) => (
        <Box key={index}>
          <Box
            onClick={() => handleAccordionClick(index)}
            style={{
              cursor: "pointer",
              backgroundColor: element.titleBackgroundColor || "#fff",
              color: element.titleColor || "#031017",
              padding: element.titlePadding || "15px",
              fontSize: element.titleFontSize || "18px",
              fontFamily:
                element.titleFontFamily ||
                "Roboto, Open Sans, Helvetica, Arial, sans-serif",
            }}
          >
            {element.title}
          </Box>
          {activeIndex === index && (
            <Box
              style={{
                backgroundColor: element.textBackgroundColor || "#fafafa",
                color: element.textColor || "#505050",
                padding: element.textPadding || "15px",
                fontSize: element.textFontSize || "14px",
                fontFamily:
                  element.textFontFamily ||
                  "Open Sans, Helvetica, Arial, sans-serif",
              }}
            >
              {element.text}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Accordion;
