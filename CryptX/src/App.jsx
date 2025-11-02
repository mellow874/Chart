import React from "react";
import Sidebar from "./components/Sidebar"; 
import Header from "./components/Header";
import Coins from "./components/Coins"

export default function App() {
    return (
        <div>
    {/* Searchbar at the top */}
      {/* Different sections */}
      <main>
        <Header />
        <Sidebar />
        <Coins/>
      </main>
      </div>
    );
}