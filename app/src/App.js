// src/App.js

import React, { useState } from "react";
import Layout from "./components/Layout";
import Response from "./components/Response";
import SearchBar from "./components/SearchBar";

function App() {
  const [conversationHistory, setConversationHistory] = useState([]);

  const handleSearch = (query) => {
    const userResponse = { text: `User: ${query}`, isBotResponse: false };
    const botResponse = { text: "Bot: Testing", isBotResponse: true };

    // Update the conversation history with both user and bot responses
    setConversationHistory([...conversationHistory, userResponse, botResponse]);
  };

  return (
    <>
      <Layout>
        {conversationHistory.map((response, index) => (
          <Response
            key={index}
            text={response.text}
            isBotResponse={response.isBotResponse}
          />
        ))}
      </Layout>
      <SearchBar onSearch={handleSearch} />
    </>
  );
}

export default App;
