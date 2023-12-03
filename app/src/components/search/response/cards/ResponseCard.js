import React from "react";
import BotIcon from "..\\assets\\icons\\forta-logo-white-circle.png";
import UserIcon from "..\\assets\\icons\\UserIcon.png";
import "./ResponseCard.css";

export const ResponseCard = ({ children, isBot }) => {
  return (
    <div className={`response-card ${isBot ? "bot" : "user"}`}>
      <div className="response-card-icon">
        {isBot ? (
          <img src={BotIcon} alt="Bot Icon" className="icon-image" />
        ) : (
          <img src={UserIcon} alt="User Icon" className="icon-image" />
        )}
      </div>

      <div className="response-card-body">
        <div className="response-card-header">
          {isBot ? <text>Bot:</text> : <text>You:</text>}
        </div>
        <div className="response-card-content">{children}</div>
      </div>
    </div>
  );
};
