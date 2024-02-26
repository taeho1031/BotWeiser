// File: BotCard.js
// Description: This file defines the BotCard component, representing a card displaying information about a specific bot.

import React from "react";
import "./BotCard.css";

// Functional component BotCard, displaying details of a specific bot.
export const BotCard = ({ id, name, chain_ids, description }) => {
  // URL for the bot's dedicated page.
  const botUrl = `https://app.forta.network/bot/${id}`;

  // Render the BotCard with details such as name, description, id, and chain_ids.
  return (
    <div className="wrapper">
      {/* Link to the bot's dedicated page */}
      <a
        className="BotCard__title"
        href={botUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>{name}</div>
      </a>

      {/* Description of the bot */}
      <div className="BotCard__description">{description}</div>

      {/* Bot ID */}
      <div>{id}</div>

      {/* Chain IDs associated with the bot */}
      <div>{chain_ids}</div>
    </div>
  );
};
