import React, { useState, useEffect } from "react";
import { BotCard } from "./cards/BotCard";
import { ResponseCard } from "./cards/ResponseCard";
import "./Response.css";

export const Response = ({ userInput, isFirstResponse }) => {
  const [responseText, setResponseText] = useState("");

  useEffect(() => {
    // Check if it's the first response
    if (isFirstResponse) {
      setResponseText("Welcome");
    } else {
      // Handle subsequent responses based on user input
      if (userInput === "1") {
        setResponseText(
          "This bot was created a year ago and currently supports 7 networks. Over the past 7 days, it has emitted 383995 alerts and 767564 labels. The last update was made 5 months ago."
        );
      } else if (userInput === "2") {
        // Assuming you have some bot info
        const botInfo = {
          id: 1,
          name: "BotName",
          description: "BotDescription",
        };
        setResponseText(
          <BotCard
            id={botInfo.id}
            name={botInfo.name}
            description={botInfo.description}
          />
        );
      } else {
        setResponseText("Default response");
      }
    }
  }, [userInput, isFirstResponse]);

  return <ResponseCard isBot={true}>{responseText}</ResponseCard>;
};
