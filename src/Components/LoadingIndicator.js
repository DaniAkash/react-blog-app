import React from "react";
import PropTypes from "prop-types";

const LoadingIndicator = ({ message = "Sending Request..." }) => <strong>{message}</strong>;

LoadingIndicator.propTypes = {
  message: PropTypes.string
};

export default LoadingIndicator;
