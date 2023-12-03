import React from "react";

export const BotCard = ({ id, name, description }) => {
  return (
    <div className="wrapper">
      <div className="BotCard__id">{id}</div>
      <div className="BotCard__heading">
        <div className="BotCard__title">{name}</div>
      </div>
      <div className="BotCard__description">{description}</div>
    </div>
  );
};
