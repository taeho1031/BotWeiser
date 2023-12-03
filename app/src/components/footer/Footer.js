import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-left">
        <a href="https://forta.org/" className="link">
          &copy;{new Date().getFullYear()} Forta Foundation
        </a>
      </div>
      <div className="footer-container-right">
        <a href="https://discord.gg/KACdTEutQq" className="link">
          Discord
        </a>
        <a href="https://forta.org/legal/" className="link">
          Term of Service
        </a>
        <a href="https://forta.org/privacy/" className="link">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};
