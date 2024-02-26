// File: App.js

import React from "react";
import Layout from "./layouts/Layout";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { SearchBlock } from "./components/search/SearchBlock";

function App() {
  // Render the layout with Navbar, SearchBlock, and Footer components.
  return (
    <Layout>
      <Navbar />
      <SearchBlock />
      <Footer />
    </Layout>
  );
}

export default App;
