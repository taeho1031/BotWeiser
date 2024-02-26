// File: ResponseList.js
// Description: This file defines the ResponseList component, responsible for rendering a list of user and system responses in a conversation.

import React, { useEffect, useRef } from "react";
import { Response } from "./Response";
import { UserResponse } from "./UserResponse";
import "./ResponseList.css";

export const ResponseList = ({ responses }) => {
  // Ref to the last element in the conversation for smooth scrolling.
  const conversationEndRef = useRef(null);

  // Effect hook to scroll to the end of the conversation when new responses are added.
  useEffect(() => {
    conversationEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [responses]);

  // Render the conversation responses including system and user responses.
  return (
    <>
      {/* Initial system response */}
      <div className="response-block">
        <Response isFirstResponse={true} />
      </div>

      {/* User and system responses mapped from the provided response array */}
      {responses.map((response, index) => (
        <div className="response-block" key={index + 1}>
          {/* User's input response */}
          <UserResponse userInput={response.text} />

          {/* System's generated response based on user input */}
          <Response userInput={response.text} />
        </div>
      ))}

      {/* Reference element for smooth scrolling to the end of the conversation */}
      <div ref={conversationEndRef}></div>
    </>
  );
};
