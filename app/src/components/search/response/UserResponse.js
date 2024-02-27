// File: UserResponse.js
// Description: This file defines the UserResponse component, representing the user's input in the conversation.

import React from "react";
import { ResponseCard } from "./cards/ResponseCard";
import "./UserResponse.css";

export const UserResponse = ({ userInput }) => {
  return <ResponseCard isBot={false}>{userInput}</ResponseCard>;
};
