import React, { useState, useEffect } from "react";
import { BotCard } from "./cards/BotCard";
import { ResponseCard } from "./cards/ResponseCard";
import "./Response.css";

export const Response = ({ userInput, isFirstResponse }) => {
  const [responseText, setResponseText] = useState("");

  useEffect(() => {
    // Check if it's the first response
    if (isFirstResponse) {
      setResponseText(
        <div>
          <p>Welcome: This page is going through test.</p>
          <p>Commands:</p>
          <p>
            "Provide me with Bots that are used for scam detection": Ask the Bot
            for List of Bots related to Scam Detector
          </p>
          <p>
            "Give me the summary of this Detection Bot:": Ask for the summary of
            the specific bot
          </p>
        </div>
      );
    } else {
      // Handle subsequent responses based on user input
      switch (userInput) {
        case "Give me the summary of this Detection Bot:":
          setResponseText(
            "This bot was created a year ago and currently supports 7 networks. Over the past 7 days, it has emitted 383995 alerts and 767564 labels. The last update was made 5 months ago."
          );
          break;

        case "Provide me with Bots that are used for scam detection":
          // Assuming you have some bot info
          const botInfo = {
            id: 1,
            name: "BotName",
            description: "BotDescription",
          };
          setResponseText(
            <>
              <BotCard
                id={botInfo.id}
                name={botInfo.name}
                description={botInfo.description}
              />
              <BotCard
                id={botInfo.id}
                name={botInfo.name}
                description={botInfo.description}
              />
              <BotCard
                id={botInfo.id}
                name={botInfo.name}
                description={botInfo.description}
              />
              <BotCard
                id={botInfo.id}
                name={botInfo.name}
                description={botInfo.description}
              />
              <BotCard
                id={botInfo.id}
                name={botInfo.name}
                description={botInfo.description}
              />
            </>
          );
          break;

        default:
          setResponseText("Default response");
          break;
      }
    }
  }, [userInput, isFirstResponse]);

  return <ResponseCard isBot={true}>{responseText}</ResponseCard>;
};
