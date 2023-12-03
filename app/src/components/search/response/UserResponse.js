import React from "react";
import { ResponseCard } from "./cards/ResponseCard";
import "./UserResponse.css";

export const UserResponse = ({ userInput }) => {
  return <ResponseCard isBot={false}>{userInput}</ResponseCard>;
};
