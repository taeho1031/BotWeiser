// File: SearchBar.js
// Description: This file defines the SearchBar component, which provides a text input area with dynamic resizing for user input.

import React, { useState } from "react";
import "./SearchBar.css";
import TextareaAutosize from "react-textarea-autosize";

export const SearchBar = ({ onUserInput }) => {
  // State variable to track user input.
  const [userInput, setUserInput] = useState("");

  // Event handler for input change.
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // Event handler for Enter key press. Calls the onUserInput callback and resets user input.
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent the default behavior of the Enter key
      onUserInput(userInput);
      setUserInput("");
    }
  };

  // Constants for defining minimum and maximum rows in the textarea.
  const minRows = 1;
  const maxRows = 5;

  // Calculate the number of lines in the textarea.
  const numLines = userInput.split(/\r*\n/).length;

  // Determine whether the content overflows to enable scrolling.
  const isOverflowing = numLines > maxRows;

  // Render the TextareaAutosize component with specified styles and event handlers.
  return (
    <TextareaAutosize
      placeholder="Ask the Assistant..."
      value={userInput}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      minRows={minRows}
      maxRows={maxRows}
      style={{
        fontSize: "0.9rem",
        color: "white",
        width: "100%",
        padding: "7px",
        resize: "none",
        overflowY: isOverflowing ? "scroll" : "hidden",
        border: "2px solid white", // Add your border color here
        borderRadius: "5px", // Optional: Add border-radius for rounded corners
        transition: "border 0.3s",
      }}
      onBlur={(e) => (e.target.style.outline = "none")}
    />
  );
};
