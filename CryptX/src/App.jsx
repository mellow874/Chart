import React from "react";
import Header from "./components/Header"; 
import Coins from "./components/Coins";
import LiveMrkt from "./components/LiveMrkt";
import Transactions from "./components/Transactions";

export default function App() {
  return (
    <div className="min-h-screen bg-light-gray flex flex-col">
      <Header />

      <main className="flex-1 p-8">
        <div>
        <Coins />
        <LiveMrkt />
        <Transactions/>
        </div>
      </main>
    </div>
  );
}