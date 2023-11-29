// src/components/Layout.js

import React from "react";
import "./Layout.css"; // Import the CSS file for styling

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="response-container">{children}</div>
    </div>
  );
};

export default Layout;
