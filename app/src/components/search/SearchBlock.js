// components/SearchBlock.tsx
import React, { useState } from "react";
import "./SearchBlock.css";
import { UserResponse } from "./response/UserResponse";
import { SearchBar } from "./searchbar/SearchBar";
import { Response } from "./response/Response";
import { ResponseList } from "./response/ResponseList"; // Import the new ResponseList component

export const SearchBlock = ({ onUserInput }) => {
  const [userInput, setUserInput] = useState("");
  const [responses, setResponses] = useState([]);

  const handleUserInput = (input) => {
    setUserInput(input);

    // Add a new response to the array
    setResponses((prevResponses) => [
      ...prevResponses,
      { id: prevResponses.length + 1, text: input },
    ]);
  };

  return (
    <div className="container">
      <div className="response-container">
        <ResponseList responses={responses} />
      </div>
      <div className="searchbar-container">
        <SearchBar onUserInput={handleUserInput} />
      </div>
    </div>
  );
};
