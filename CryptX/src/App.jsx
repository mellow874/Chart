import React from "react";
import Sidebar from "./components/Sidebar"; 
import Header from "./components/Header";

export default function App() {
    return (
        <div>
    {/* Searchbar at the top */}
      <Header />
      {/* Different sections */}
      <main>
        <Sidebar />
      </main>
      </div>
    );
}