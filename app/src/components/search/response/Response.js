import React, { useState, useEffect } from "react";
import { ResponseCard } from "./cards/ResponseCard";
import { BotCard } from "./cards/BotCard";

export const Response = ({ userInput, isFirstResponse }) => {
  const [responseContent, setResponseContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/get-response?userInput=${encodeURIComponent(userInput)}&isFirstResponse=${isFirstResponse}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setResponseContent(data.responseText);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setResponseContent('Error fetching data. Please try again later.');
      }
    };

    fetchData();
  }, [userInput, isFirstResponse]);

  let responseData;
    try {
      responseData = JSON.parse(responseContent);
    } catch (error) {
    console.error('Error parsing JSON: ', error);
    responseData = null;
  }


  return (
    <ResponseCard isBot={true}>
      {responseContent ? (
        responseData && responseData.length > 1 ? (
          responseData.map((botData, index) => (
            <div key={index}>
              {botData.bot_id ? (
                <>
                  <BotCard
                    id={botData.bot_id}
                    name={botData.name}
                    chain_ids={botData.chainIds.join(', ')}
                    description={botData.description}
                  />
                  <hr />
                  <div dangerouslySetInnerHTML={{ __html: botData._additional.generate.singleResult }} />
                </>
              ) : (
                <p>Error</p>
              )}
            </div>
          ))
        ) : (
          <p> {responseContent}</p>
        )
      ) : (
        <p>Loading ...</p>
      )}
    </ResponseCard>
  );
}  