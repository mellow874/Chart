import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Coins from "./components/Coins";
import LiveMrkt from "./components/LiveMrkt";
import Transactions from "./components/Transactions";
import BTCChart from "./assets/BTCChart.png";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    //Everything stays on one page/frame
    <div className="flex min-h-screen bg-[#F4F5FA]">
    {/* Sidebar button when clicked opens and closes */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:ml-[263px] flex flex-col">
        <Header onMenuClick={() => setSidebarOpen(true)} /> 

        <main className="flex-1 bg-white px-6 py-6">
          {/*Coin and chart section stay in a grid side by side*/}
          <div className= "flex items-start gap-6 flex-wrap">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Coins />
              </div>
              
              
                <div className="shrink-0 -mt-7 ml-8">
                   <img src={BTCChart} alt="BTC Chart" className="flex justify-center max-w-full h-auto" />
                </div>
          </div>
          {/* Live market and transactions section stay in a grid side by side*/}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LiveMrkt />
            <Transactions />
          </div>
        </main>
      </div>
    </div>
  );
}
