import React, { useState } from "react";
import "./SearchBar.css";
import TextareaAutosize from "react-textarea-autosize";

export const SearchBar = ({ onUserInput }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent the default behavior of the Enter key
      onUserInput(userInput);
      setUserInput("");
    }
  };

  const minRows = 1;
  const maxRows = 5;

  // Calculate the number of lines in the textarea
  const numLines = userInput.split(/\r*\n/).length;

  // Determine whether the content overflows
  const isOverflowing = numLines > maxRows;

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
