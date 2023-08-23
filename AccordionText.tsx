import React, { useState } from "react";
import { Box, Text } from "@react-email/components";

const AccordionText = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <Box
        p={2}
        bg={isOpen ? "lightgray" : "white"}
        onClick={handleToggle}
        style={{ cursor: "pointer" }}
      >
        <Text fontSize={16} fontWeight="bold">
          {title}
        </Text>
      </Box>
      {isOpen && (
        <Box p={2} bg="lightgray">
          {children}
        </Box>
      )}
    </Box>
  );
};

export default AccordionText;
