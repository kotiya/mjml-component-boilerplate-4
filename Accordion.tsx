import React, { useState } from "react";
import { Box, Text } from "@react-email/components";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Box>
      {items.map((item, index) => (
        <Box key={index}>
          <Box
            p={2}
            bg={index === activeIndex ? "blue" : "gray"}
            onClick={() => handleClick(index)}
            style={{ cursor: "pointer" }}
          >
            <Text color="white">{item.title}</Text>
          </Box>
          {index === activeIndex && (
            <Box p={2} bg="lightgray">
              <Text>{item.content}</Text>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Accordion;
