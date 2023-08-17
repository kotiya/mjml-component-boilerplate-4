import React from "react";
import { Box, Text } from "@react-email/components";

const AccordionElement = ({ title, content }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Box
        onClick={handleToggle}
        style={{
          cursor: "pointer",
          backgroundColor: expanded ? "#fff" : "#dededd",
          padding: "15px",
          fontFamily: "Roboto, Open Sans, Helvetica, Arial, sans-serif",
          color: "#031017",
          fontSize: "18px",
        }}
      >
        {title}
      </Box>
      {expanded && (
        <Box
          style={{
            backgroundColor: "#fafafa",
            padding: "15px",
            fontFamily: "Open Sans, Helvetica, Arial, sans-serif",
            color: "#505050",
            fontSize: "14px",
          }}
        >
          <Text lineHeight="20px">{content}</Text>
        </Box>
      )}
    </Box>
  );
};

export default AccordionElement;
