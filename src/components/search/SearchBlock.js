import React from "react";
import { SearchBar } from "./searchbar/SearchBar";
import { Response } from "./response/Response";

export const SearchBlock = () => {
  return (
    <div className="container">
      <Response />
      <SearchBar />
    </div>
  );
};
