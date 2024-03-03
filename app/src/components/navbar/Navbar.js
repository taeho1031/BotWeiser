// File: Navbar.js
// Description: This file defines the Navbar component, which displays the navigation bar with links and a wallet connector button.

import React from "react";
import "./Navbar.css";
import logo from '../../assets/icons/forta-logo-white-header.jpg'

export const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Forta logo */}
      <div className="logo">
        <img src={logo} alt="Forta logo icon" height="20" />
      </div>

      {/* Navigation links */}
      <ul className="MenuItem">
        <li>
          <a href="https://app.forta.network/pools?search=">Pool</a>
        </li>
        <li>
          <a href="https://app.forta.network/bots">Bots</a>
        </li>
        <li>
          <a href="https://app.forta.network/alerts">Alerts</a>
        </li>
        <li>
          <a href="https://app.forta.network/network">Network</a>
        </li>
        <li>
          <a href="https://docs.forta.network/en/latest/?_gl=1*1lyrmxx*_ga*MTYzNTM3NDA1NC4xNzAxMzc5MjE1*_ga_3ERDDVRGQQ*MTcwMTU1NjU0MS4yLjEuMTcwMTU2MTM4OS4wLjAuMA..">
            Docs
          </a>
        </li>
      </ul>

      {/* Wallet connector button */}
      <div className="WalletConnector">
        <button>Connect your wallet</button>
      </div>
    </nav>
  );
};
