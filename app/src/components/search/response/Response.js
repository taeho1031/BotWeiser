// File: Response.js
// Description: This file defines the Response component, responsible for fetching and rendering responses, including BotCard and ResponseCard components.

import React, { useState, useEffect } from "react";
import { ResponseCard } from "./cards/ResponseCard";
import { BotCard } from "./cards/BotCard";
import './Response.css';

export const Response = ({ userInput, isFirstResponse }) => {
  const [responseContent, setResponseContent] = useState(null);
  const [showFullAdditional, setShowFullAdditional] = useState({});
  const [checkboxMessage, setCheckboxMessage] = useState('');

  const toggleAdditionalVisibility = (botId) => {
    setShowFullAdditional((prevShow) => ({
      ...prevShow,
      [botId]: !prevShow[botId],
    }));
  };

  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    const phrases = [
      "Fetching data...", "Please wait...", "Compiling responses..."
    ];
    let phraseIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    let timer = null;

    const typeWriter = () => {
      const currentPhrase = phrases[phraseIndex];
      const updatePlaceholder = (text) => setPlaceholder(text);

      if (isDeleting) {
        if (letterIndex > 0) {
          letterIndex--;
          updatePlaceholder(currentPhrase.slice(0, letterIndex));
          timer = setTimeout(typeWriter, 50);
        } else {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timer = setTimeout(typeWriter, 500);
        }
      } else {
        if (letterIndex < currentPhrase.length) {
          letterIndex++;
          updatePlaceholder(currentPhrase.slice(0, letterIndex));
          timer = setTimeout(typeWriter, 100);
        } else {
          isDeleting = true;
          timer = setTimeout(typeWriter, 500);
        }
      }
    };

    timer = setTimeout(typeWriter, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:5000/get-response?userInput=${encodeURIComponent(userInput)}&isFirstResponse=${isFirstResponse}`
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

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setCheckboxMessage(isChecked ? 'clicked' : '');
  
    // Send the checkbox status to the backend
    const sendCheckboxStatusToBackend = async (status) => {
      try {
        const response = await fetch('http://127.0.0.1:5000/update-checkbox-status', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status }),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const responseData = await response.json();
        console.log(responseData.message); // For debug purposes
      } catch (error) {
        console.error('Error sending checkbox status:', error);
      }
    };
  
    sendCheckboxStatusToBackend(isChecked ? 'clicked' : '');
  };
  

  let responseData;
  if (responseContent && typeof responseContent === 'string' && responseContent.trim().startsWith('{')) {
    try {
      responseData = JSON.parse(responseContent);
    } catch (error) {
      console.error("Error parsing JSON: ", error);
      responseData = undefined; 
    }
  }

  return (
    <ResponseCard isBot={true}>
      {responseContent ? (
        responseData &&
        responseData.data &&
        responseData.data.Get &&
        responseData.data.Get.FortaBot ? (
          <>
            {responseData.data.Get.FortaBot.map((botData, index) => {
              const delay = index * 0.5;
              const showFull = showFullAdditional[botData.bot_id];

              return (
                <div key={index}>
                  <BotCard
                    id={botData.bot_id}
                    name={botData.name}
                    chain_ids={botData.chainIds}
                    description={botData.description}
                    additionalInfo={botData._additional.generate.singleResult}
                    showFull={showFull}
                    toggleVisibility={() => toggleAdditionalVisibility(botData.bot_id)}
                    delay={delay}
                  />
                </div>
              );
            })}
            {!isFirstResponse && (
              <div className="bot-action-prompt">
                <p>If you want to find a more relevant bot continue providing more information. If you want to look for a new bot or search by Bot ID then toggle the button below and continue!</p>

                <label className="switch">
                  <input type="checkbox" onChange={handleCheckboxChange}/>
                  <span className="slider round"></span>
                </label>
              </div>
            )}
          </>
        ) : (
          <>
            <p dangerouslySetInnerHTML={{ __html: responseContent }}></p>
            {!isFirstResponse && (
              <div className="bot-action-prompt">
                <p>If you want to find a more relevant bot continue providing more information. If you want to look for a new bot then toggle the button below and continue!</p>

                {checkboxMessage && <p>{checkboxMessage}</p>}
                <label className="switch">
                  <input type="checkbox" onChange={handleCheckboxChange}/>
                  <span className="slider round"></span>
                </label>
              </div>
            )}
          </>
        )
      ) : (
        <div className="typewriter-container">        
          <p>{placeholder}</p>
        </div>
      )}
    </ResponseCard>
  );
};
