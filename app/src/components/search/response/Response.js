// File: Response.js
// Description: This file defines the Response component, responsible for fetching and rendering responses, including BotCard and ResponseCard components.

import React, { useState, useEffect } from "react";
import { ResponseCard } from "./cards/ResponseCard";
import { BotCard } from "./cards/BotCard";

export const Response = ({ userInput, isFirstResponse }) => {
  // State variable to manage the content of the response.
  const [responseContent, setResponseContent] = useState(null);

  // Effect hook to fetch response data when user input or isFirstResponse changes.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:5000/get-response?userInput=${encodeURIComponent(
            userInput
          )}&isFirstResponse=${isFirstResponse}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setResponseContent(data.responseText);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setResponseContent("Error fetching data. Please try again later.");
      }
    };

    fetchData();
  }, [userInput, isFirstResponse]);

  // Variable to store parsed response data.
  let responseData;

  // Try parsing JSON response content; handle errors.
  try {
    responseData = JSON.parse(responseContent);
  } catch (error) {
    console.error("Error parsing JSON: ", error);
    responseData = null;
  }

  // Render the ResponseCard with BotCard components based on response data.
  return (
    <ResponseCard isBot={true}>
      {responseContent ? (
        responseData &&
        responseData.data &&
        responseData.data.Get &&
        responseData.data.Get.FortaBot ? (
          responseData.data.Get.FortaBot.map((botData, index) => (
            <div key={index}>
              <>
                {/* Render BotCard component with bot details */}
                <BotCard
                  id={botData.bot_id}
                  name={botData.name}
                  chain_ids={botData.chainIds}
                  description={botData.description}
                />
                <hr />
                {/* Render additional bot details as HTML */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: botData._additional.generate.singleResult,
                  }}
                />
              </>
            </div>
          ))
        ) : (
          // Render simple paragraph for non-bot responses
          <p>{responseContent}</p>
        )
      ) : (
        // Render loading message during data fetch
        <p>Loading ...</p>
      )}
    </ResponseCard>
  );
};
