// src/components/Response.js

import React from "react";
import "./Response.css"; // Import the CSS file for styling

const Response = ({ text, isBotResponse }) => {
  const responseClassName = isBotResponse ? "bot-response" : "user-response";

  return <div className={responseClassName}>{text}</div>;
};

export default Response;
