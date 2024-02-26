import React from "react";
import "./BotCard.css";

export const BotCard = ({ id, name, chain_ids, description }) => {
  const botUrl = `https://app.forta.network/bot/${id}`;

  return (
    <div className="wrapper">
      <a
        className="BotCard__title"
        href={botUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>{name}</div>
      </a>
      <div className="BotCard__description">{description}</div>
      <div>{id}</div>
      <div>{chain_ids}</div>
    </div>
  );
};
