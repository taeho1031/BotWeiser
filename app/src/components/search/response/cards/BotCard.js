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
        {chain_ids} {name}
      </a>
      <div className="BotCard__description">{description}</div>
    </div>
  );
};
