import React from "react";

function BotCard({
  id,
  bot_type,
  title,
  href,
  chains,
  descriptions,
  developer,
  alerts,
  status,
}) {
  return (
    <div className="BotCard">
      <div className="BotCard_id">
        {id}
        <div aria-label="Copy to clipboard" className="InfoPopover">
          <div className="copy-container" role="button" tabIndex={0}>
            <div className="copy-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"></path>
                <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path>
              </svg>
            </div>
          </div>
        </div>
        <span className="PlanLabel--scam BotCard_plan">{bot_type}</span>
      </div>
      <div className="BotCard_heading">
        <h3 className="BotCard_title">
          <a href={href}>{title}</a>
          <div className="BotCard_chains">
            {chains.map((chain, index) => (
              <div key={index} className="BotCard_chain">
                <img
                  src={chain.iconUrl}
                  alt={`Chain ${index + 1}`}
                  className="ChainIcon"
                />
              </div>
            ))}
          </div>
        </h3>
      </div>
      <div className="BotCard_description">{descriptions}</div>
      <div class="BotCard__meta">
        <div class="MetaField">
          <div class="MetaField__label">Developer:</div>
          <div class="MetaField__value">
            {developer}
            <div aria-label="Copy to clipboard" class="InfoPopover">
              <div class="copy-container" role="button" tabindex="0">
                <div class="copy-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"></path>
                    <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="MetaField">
          <div class="MetaField__label">Alerts:</div>
          <div class="MetaField__value">{alerts}</div>
        </div>
        <div class="MetaField">
          <div class="MetaField__label">Status:</div>
          <div class="MetaField__value">
            <div class="BotStatus BotStatus--enabled">{status}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
