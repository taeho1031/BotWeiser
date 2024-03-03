// File: BotCard.js
// Description: This file defines the BotCard component, representing a card displaying information about a specific bot.

import React from "react";
import "./BotCard.css";
import clipboard from "..\\src\\assets\\icons\\clipboard.png";
import eth from "..\\src\\assets\\icons\\eth.png";
import avax from "..\\src\\assets\\icons\\avax.png";
import matic from "..\\src\\assets\\icons\\matic.png";
import op from "..\\src\\assets\\icons\\op.png";
import celo from "..\\src\\assets\\icons\\celo.png";
import arb from "..\\src\\assets\\icons\\arb.png";
import bsc from "..\\src\\assets\\icons\\bsc.png";
import ftm from "..\\src\\assets\\icons\\ftm.png";

// Functional component BotCard, displaying details of a specific bot.
export const BotCard = ({ id, name, chain_ids, description }) => {
  // URL for the bot's dedicated page.
  const botUrl = `https://app.forta.network/bot/${id}`;

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Chain id copied to clipboard:", text);
      })
      .catch((error) => {
        console.error("Failed to copy chain id to clipboard:", error);
      });
  };

  // chain ID to icon image mapping
  const getIconFileName = (chainId) => {
    const fileNameMapping = {
      1: eth,
      42114: avax,
      5: eth,
      137: matic,
      10: op,
      43114: avax,
      42220: celo,
      42161: arb,
      56: bsc,
      250: ftm,
    };
    return fileNameMapping[chainId] || "forta-logo-white-circle.png";
  };

  // Render the BotCard with details such as name, description, id, and chain_ids.
  return (
    // Inside the BotCard component's return statement
    <div className="wrapper">
      <div className="title-container">
        <a
          className="BotCard__title"
          href={botUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Bot Name */}
          {name}
        </a>

        {/* Blockchain Logo */}
        <div className="logo">
          {chain_ids.map((chainId, index) => (
            <img
              key={index}
              src={getIconFileName(chainId)}
              alt={`Icon for ${chainId}`}
              width={25}
              height={25}
            />
          ))}
        </div>
      </div>

      {/* Bot ID */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Truncated chain id */}
        <text>Bot ID: </text>
        <span>
          {id.substring(0, 6)}...{id.substring(id.length - 4)}
        </span>
        {/* Clipboard icon to copy the full chain id to clipboard */}
        <img
          src={clipboard}
          alt="Copy to clipboard"
          height={25}
          width={25}
          style={{ cursor: "pointer", filter: "brightness(100%)" }}
          onClick={() => copyToClipboard(id)}
          title="Copy to clipboard" // Tooltip text
        />
      </div>

      {/* Description of the Bot */}
      <div className="BotCard__description">{description}</div>
    </div>
  );
};
