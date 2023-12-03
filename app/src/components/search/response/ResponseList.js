import React, { useEffect, useRef } from "react";
import { Response } from "./Response";
import { UserResponse } from "./UserResponse";
import "./ResponseList.css";

export const ResponseList = ({ responses }) => {
  const conversationEndRef = useRef(null);
  useEffect(() => {
    conversationEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [responses]);

  return (
    <>
      <div className="response-block">
        <Response isFirstResponse={true} />
      </div>
      {responses.map((response, index) => (
        <div className="response-block" key={index + 1}>
          <UserResponse userInput={response.text} />
          <Response userInput={response.text} />
        </div>
      ))}
      <div ref={conversationEndRef}></div>
    </>
  );
};
