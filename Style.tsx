import React from "react";
import PropTypes from "prop-types";

const Style = ({ children }) => {
  return (
    <style type="text/css" dangerouslySetInnerHTML={{ __html: children }} />
  );
};

Style.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Style;
