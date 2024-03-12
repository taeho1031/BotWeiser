// File: BotCard.js
// Description: This file defines the BotCard component, representing a card displaying information about a specific bot.

import React, { useState } from "react";
import "./BotCard.css";
import check from "../../../../assets/icons/check.png";
import clipboard from "../../../../assets/icons/clipboard.png";
import eth from "../../../../assets/icons/eth.png";
import avax from "../../../../assets/icons/avax.png";
import matic from "../../../../assets/icons/matic.png";
import op from "../../../../assets/icons/op.png";
import celo from "../../../../assets/icons/celo.png";
import arb from "../../../../assets/icons/arb.png";
import bsc from "../../../../assets/icons/bsc.png";
import ftm from "../../../../assets/icons/ftm.png";

// Functional component BotCard, displaying details of a specific bot.
export const BotCard = ({ id, name, chain_ids, description, additionalInfo, showFull, toggleVisibility, delay }) => {
  // URL for the bot's dedicated page.
  const botUrl = `https://app.forta.network/bot/${id}`;
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Chain id copied to clipboard:", text);
        setCopySuccess(true); 
        setTimeout(() => {
          setCopySuccess(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy chain id to clipboard:", error);
      });
  };

  const styleWithDelay = {
    animationDelay: `${delay}s`,
  };

// chain ID to icon image and blockchain name mapping
const getIconFileName = (chainId) => {
  const mapping = {
    1: { fileName: eth, name: "Ethereum" },
    42114: { fileName: avax, name: "Avalanche" },
    5: { fileName: eth, name: "Ethereum" },
    137: { fileName: matic, name: "Polygon" },
    10: { fileName: op, name: "Optimism" },
    43114: { fileName: avax, name: "Avalanche" },
    42220: { fileName: celo, name: "Celo" },
    42161: { fileName: arb, name: "Arbitrum" },
    56: { fileName: bsc, name: "Binance Smart Chain" },
    250: { fileName: ftm, name: "Fantom" },
  };
  return mapping[chainId] || { fileName: "forta-logo-white-circle.png", name: "Unknown" };
};

  // Render the BotCard with details such as name, description, id, and chain_ids.
  return (
    // Inside the BotCard component's return statement
    <div className="wrapper fadeInDelayed" style={styleWithDelay}>
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
          {chain_ids.map((chainId, index) => {
            const { fileName, name } = getIconFileName(chainId);
            return (
              <span key={index} title={name}>
                <img
                  src={fileName}
                  alt={`Icon for ${chainId}`}
                  width={25}
                  height={25}
                />
              </span>
            );
          })}
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

        {/* Display message when user copies bot id */}
        {copySuccess && (
          <div style={{ display: "flex", alignItems: "center", marginLeft: 5 }}>
            <img src={check} alt="Success" height={15} width={15} />
            <span style={{ color: "green" }}>Copied</span>
          </div>
        )}
      </div>

      {/* Description of the Bot */}
      <div className="BotCard__description">{description}</div>

      <div className={`additional-details ${showFull ? 'additional-details--expanded' : ''}`} dangerouslySetInnerHTML={{ __html: additionalInfo }} />
      <button className="read_more_button" onClick={toggleVisibility}>
        {showFull ? 'Show Less...' : 'Show More...'}
      </button>
    </div>
  );
};
