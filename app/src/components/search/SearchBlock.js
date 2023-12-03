import React, { useState } from "react";
import { SearchBar } from "./searchbar/SearchBar";
import { ResponseList } from "./response/ResponseList"; // Import the new ResponseList component
import "./SearchBlock.css";

export const SearchBlock = ({ onUserInput }) => {
  const [, setUserInput] = useState("");
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
