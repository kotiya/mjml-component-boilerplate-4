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
        p="10px"
        bg={isOpen ? "#f0f0f0" : "#ffffff"}
        borderBottom="1px solid #e0e0e0"
        onClick={handleToggle}
        style={{ cursor: "pointer" }}
      >
        <Text fontSize="16px" fontWeight="bold">
          {title}
        </Text>
      </Box>
      {isOpen && (
        <Box p="10px" bg="#f0f0f0">
          {children}
        </Box>
      )}
    </Box>
  );
};

export default AccordionText;
