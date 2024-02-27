// File: Layout.js
// Description: This file defines the Layout component, structuring the overall layout of the application.

import React from "react";
import "./Layout.css";

// Functional component Layout, organizing the layout structure with header, main content, and footer.
const Layout = ({ children }) => {
  // Destructuring children array into navBar, contentBlock, and footer.
  const [navBar, contentBlock, footer] = children;

  // Render the Layout component with header, main content, and footer sections.
  return (
    <div className="layout">
      <header>{navBar}</header>
      <main>{contentBlock}</main>
      <footer>{footer}</footer>
    </div>
  );
};

export default Layout;
