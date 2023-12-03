import React from "react";
import "./ResponseCard.css";

export const ResponseCard = ({ children, isBot }) => {
  return (
    <div className="response-card">
      {isBot ? <h1>Bot: </h1> : <h1>You:</h1>}
      {children}
    </div>
  );
};
