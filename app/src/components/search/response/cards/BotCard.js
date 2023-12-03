import React from "react";
import "./BotCard.css";

export const BotCard = ({ id, name, description }) => {
  return (
    <div className="wrapper">
      <div className="BotCard__id">
        <text>Bot ID:</text>
        {id}
      </div>
      <div className="BotCard__heading">
        <div className="BotCard__title">{name}</div>
      </div>
      <div className="BotCard__description">{description}</div>
    </div>
  );
};
