import React, { useState, useEffect } from "react";
import { ResponseCard } from "./cards/ResponseCard";

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

  return (
    <ResponseCard isBot={true}>
      {responseContent ? (
        <div dangerouslySetInnerHTML={{ __html: responseContent }} />
      ) : (
        <p>Loading...</p>
      )}
    </ResponseCard>
  );
};
