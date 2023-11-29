// src/components/SearchBar.js

import React, { useState } from "react";
import "./SearchBar.css"; // Import the CSS file for styling

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevents the form from submitting and reloading the page
    onSearch(query);
    setQuery(""); // Clear the search bar
  };

  const handleKeyPress = (e) => {
    // Check if the pressed key is Enter (key code 13)
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar-container">
      <textarea
        placeholder="Enter your search..."
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        rows={3} // Set the number of visible rows
      />
    </form>
  );
};

export default SearchBar;
