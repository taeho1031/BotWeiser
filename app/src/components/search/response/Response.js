// File: Response.js
// Description: This file defines the Response component, responsible for fetching and rendering responses, including BotCard and ResponseCard components.

import React, { useState, useEffect } from "react";
import { ResponseCard } from "./cards/ResponseCard";
import { BotCard } from "./cards/BotCard";
import './Response.css'
export const Response = ({ userInput, isFirstResponse }) => {
  // State variable to manage the content of the response.
  const [responseContent, setResponseContent] = useState(null);
  const [showFullDescriptions, setShowFullDescriptions] = useState({});
  const [showFullAdditional, setShowFullAdditional] = useState({});

  const toggleDescriptionVisibility = (botId) => {
    setShowFullDescriptions((prev) => ({
      ...prev,
      [botId]: !prev[botId],
    }));
  };

  const toggleAdditionalVisibility = (botId) => {
    setShowFullAdditional((prevShow) => ({
      ...prevShow,
      [botId]: !prevShow[botId],
    }));
  };

  // const [showFullDescriptions, setShowFullDescriptions] = useState({});

  // const toggleDescriptionVisibility = (botId) => {
  //   setShowFullDescriptions((prevShowFullDescriptions) => ({
  //     ...prevShowFullDescriptions,
  //     [botId]: !prevShowFullDescriptions[botId],
  //   }));
  // };
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
    console.log("Description:", responseData.description);
  } catch (error) {
    console.error("Error parsing JSON: ", error);
    responseData = null;
  }

  const hasBotData = responseData && responseData.data && responseData.data.Get && responseData.data.Get.FortaBot && responseData.data.Get.FortaBot.length > 0;

  const handleResetConversation = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5000/reset-conversation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        // Optionally, do something with the response here
        console.log("Conversation reset successfully");
        // Trigger anything else that's needed post reset, e.g., clearing state in the frontend or refetching initial data
    } catch (error) {
        console.error("Error resetting conversation: ", error);
    }
};


  // Render the ResponseCard with BotCard components based on response data.
  return (
    <ResponseCard isBot={true}>
      {responseContent ? (
        responseData &&
        responseData.data &&
        responseData.data.Get &&
        responseData.data.Get.FortaBot ? (
          responseData.data.Get.FortaBot.map((botData, index) => {
            // Debugging: Log each bot's description to the console
            const showFull = showFullAdditional[botData.bot_id];

            console.log(`Bot ${index} Description:`, `${botData._additional.generate.singleResult}`);

            return (
              <div key={index}>
                {/* Render BotCard component with bot details */}
                <BotCard
                  id={botData.bot_id}
                  name={botData.name}
                  chain_ids={botData.chainIds}
                  description={botData.description}
                />
                <hr />
                {/* Render additional bot details as HTML */}
                <div className={`additional-details ${showFull ? 'additional-details--expanded' : ''}`}
        dangerouslySetInnerHTML={{ __html: botData._additional.generate.singleResult }} 
      />
                <button className = {'read_more_button'} onClick={() => toggleAdditionalVisibility(botData.bot_id)}>
                  {showFull ? 'Show Less...' : 'Show More...'}
                </button>
              </div>
            );
          })
        ) : (
          // Render simple paragraph for non-bot responses
          <p dangerouslySetInnerHTML={{ __html: responseContent }}></p>
        )
      ) : (
        // Render loading message during data fetch
        <p>Loading ...</p>
      )}
            {!isFirstResponse && hasBotData &&(
            <div className="bot-action-prompt">
        <p> If you want to find a more relevant bot continue providing information. If you want to find a new bot then click 'Look for a new bot'.</p>
        <button className="new-bot-button" onClick={handleResetConversation}>Look for a new bot</button>
      </div>
      )}
    </ResponseCard>
  );
};