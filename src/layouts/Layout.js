import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  const [navBar, contentBlock, footer] = children;
  return (
    <div className="layout">
      <header>{navBar}</header>
      <main>{contentBlock}</main>
      <footer>{footer}</footer>
    </div>
  );
};

export default Layout;
