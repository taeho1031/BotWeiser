// File: SearchBlock.js
// Description: This file defines the SearchBlock component, which combines the SearchBar and ResponseList components.
// It manages user input and displays a list of responses.

import React, { useState } from "react";
import { SearchBar } from "./searchbar/SearchBar";
import { ResponseList } from "./response/ResponseList";
import "./SearchBlock.css";

export const SearchBlock = ({ onUserInput }) => {
  // State variables for user input and responses list.
  const [, setUserInput] = useState("");
  const [responses, setResponses] = useState([]);

  // Handler function for user input. Updates user input state and adds a new response to the array.
  const handleUserInput = (input) => {
    setUserInput(input);

    // Add a new response to the array
    setResponses((prevResponses) => [
      ...prevResponses,
      { id: prevResponses.length + 1, text: input },
    ]);
  };

  // Render the SearchBlock component with SearchBar and ResponseList components.
  return (
    <div className="search-block-container">
      <div className="response-container">
        <ResponseList responses={responses} />
      </div>
      <div className="searchbar-container">
        <SearchBar onUserInput={handleUserInput} />
      </div>
    </div>
  );
};
