import React, { useState } from "react";
import { Box, Text } from "@react-email/components";

const Accordion = ({ elements }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Box>
      {elements.map((element, index) => (
        <Box key={index}>
          <Box
            onClick={() => handleClick(index)}
            style={{
              cursor: "pointer",
              backgroundColor: "#fff",
              color: "#031017",
              padding: "15px",
              fontSize: "18px",
              fontFamily: "Roboto, Open Sans, Helvetica, Arial, sans-serif",
            }}
          >
            {element.title}
          </Box>
          {activeIndex === index && (
            <Box
              style={{
                backgroundColor: "#fafafa",
                padding: "15px",
                color: "#505050",
                fontSize: "14px",
                fontFamily: "Open Sans, Helvetica, Arial, sans-serif",
              }}
            >
              {element.content}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Accordion;
