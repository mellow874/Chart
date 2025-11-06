import React from "react";
// Import chart logos
import BTC from "../assets/BTC chartl.png";
import ETH from "../assets/ETH chartl.png";
import ADA from "../assets/ADA chartl.png";
import ITC from "../assets/ITC chartl.png";

export default function Coins() {
  /* Array of coins, with objects that include, name, symbol, price, chart, and trend with a boolean too*/
  const coins = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      image: BTC,
      price: "$40,291",
      trend: "+0.25%",
      positive: true,
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      image: ETH,
      price: "$18,291",
      trend: "+0.25%",
      positive: true,
    },
    {
      name: "Litecoin",
      symbol: "ITC",
      image: ITC,
      price: "$8,291",
      trend: "+0.25%",
      positive: true,
    },
    {
      name: "Cardano",
      symbol: "ADA",
      image: ADA,
      price: "$3,291",
      trend: "-2.05%",
      positive: false,
    },
  ];

   return (
    <>
      {/* Array map that creates a card for each coin*/}
      {coins.map((coin, index) => (
        <div key={index} className="bg-white rounded-lg p-4 gap-4 card-style">

          {/*Symbol and the trend*/}
            <div className="flex items-center justify-between mb-3"> 

            {/*Coin image*/}
            <img src={coin.image} alt={coin.name} className="w-[52px] h-[52px] top[32px] left-[30px] object-contain"/>

            {/*Trend indicator with two different colors */}
            <p className={`text-sm font-semibold ${coin.positive ? "text-trend-green" : "text-trend-red"}`}>
              {coin.positive ? "▲" : "▼"} {coin.trend}
            </p>
         </div>

          {/*Coin price and coin name below the coin image*/}
          <div className="flex flex-col">
            
            {/*Coin price*/}
            <h2 className="text-xl font-bold coin-value">
              {coin.price}
            </h2>

            {/*Coin name and symbol*/}
            <p className="text-sm text-coin">
              {coin.name} - {coin.symbol}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}