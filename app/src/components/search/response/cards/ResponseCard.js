// File: ResponseCard.js
// Description: This file defines the ResponseCard component, representing a card for displaying responses in the conversation.

import React from "react";
import BotIcon from "../../../../assets/icons/forta-logo-white-circle.png";
//import BotIcon from "..\\assets\\icons\\forta-logo-white-circle.png";
import UserIcon from "../../../../assets/icons/UserIcon.png"
//import UserIcon from "..\\assets\\icons\\UserIcon.png";
import "./ResponseCard.css";

export const ResponseCard = ({ children, isBot }) => {
  // Render the ResponseCard with a dynamic class based on whether it is a bot or user response.
  return (
    <div className={`response-card ${isBot ? "bot" : "user"}`}>
      {/* Icon representing either a bot or user */}
      <div className="response-card-icon">
        {isBot ? (
          <img src={BotIcon} alt="Bot Icon" className="icon-image" />
        ) : (
          <img src={UserIcon} alt="User Icon" className="icon-image" />
        )}
      </div>

      {/* Content of the response card, including header and body */}
      <div className="response-card-body">
        {/* Header indicating whether the response is from a bot or the user */}
        <div className="response-card-header">
          {isBot ? <text>Bot:</text> : <text>You:</text>}
        </div>

        {/* Body containing the actual response content */}
        <div className="response-card-content">{children}</div>
      </div>
    </div>
  );
};
