import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import TextareaAutosize from "react-textarea-autosize";

export const SearchBar = ({ onUserInput }) => {
  const [userInput, setUserInput] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const phrases = ["Ask the Assistant...", "I want a scam bot on Ethereum blockchain", 'Can you find me a money-laundering bot?'];

  useEffect(() => {
    let phraseIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    let timer = null;

    const typeWriter = () => {
      const currentPhrase = phrases[phraseIndex];
      const updatePlaceholder = (text) => setPlaceholder(text);

      if (isDeleting) {
        // Update for deletion
        if (letterIndex > 0) {
          letterIndex--;
          updatePlaceholder(currentPhrase.slice(0, letterIndex));
          timer = setTimeout(typeWriter, speedBackward);
        } else {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timer = setTimeout(typeWriter, delayBeforeStart);
        }
      } else {
        // Update for typing
        if (letterIndex < currentPhrase.length) {
          letterIndex++;
          updatePlaceholder(currentPhrase.slice(0, letterIndex));
          timer = setTimeout(typeWriter, speedForward);
        } else {
          isDeleting = true;
          timer = setTimeout(typeWriter, pauseEnd);
        }
      }
    };

    timer = setTimeout(typeWriter, delayBeforeStart);

    return () => clearTimeout(timer);
  }, []);

  // Control variables
  const speedForward = 100; // Typing speed (milliseconds per character)
  const speedBackward = 100; // Deleting speed (milliseconds per character)
  const pauseEnd = 2000; // Delay between finishing typing and starting deleting
  const delayBeforeStart = 500; // Delay before starting to type a new phrase

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onUserInput(userInput);
      setUserInput("");
    }
  };

  const minRows = 1;
  const maxRows = 5;

  return (
    <TextareaAutosize
      placeholder={placeholder}
      value={userInput}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      minRows={minRows}
      maxRows={maxRows}
      style={{
        fontSize: "0.9rem",
        color: "black",
        width: "100%",
        padding: "7px",
        resize: "none",
        overflowY: "hidden",
        border: "2px solid white",
        borderRadius: "5px",
        transition: "border 0.3s",
        backgroundColor: "white",
      }}
      onBlur={(e) => (e.target.style.outline = "none")}
    />
  );
};
