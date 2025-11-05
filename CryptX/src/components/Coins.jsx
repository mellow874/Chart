import React from "react";

//import images
import BTC from "../assets/BTC chartl.png";
import ETH from "../assets/ETH chartl.png";
import ADA from "../assets/ADA chartl.png";
import ITC from "../assets/ITC chartl.png";


export default function Coins() {
  const coins = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      image: BTC,
      price: "$40,291",
      trend: "+0.25%",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      image: ETH,
      price: "$18,291",
      trend: "+0.25%",
    },
    {
      name: "Litecoin",
      symbol: "LTC",
      image: ITC,
      price: "$8,291",
      trend: "+0.25%",
 
    },
    {
      name: "Cardano",
      symbol: "ADA",
      image: ADA,
      price: "$3,291",
      trend: "-0.25%",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      {coins.map((coin, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6  h-full shadow-md"
        >

             {/* Coin image */}
            <img
              src={coin.image}
              alt={coin.name}
              className="w-12 h-12 object-contain"
            />

          {/* Icon + change */}
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-lg ${coin.bg} ${coin.color} text-xl`}
            >
              {coin.icon}
            </div>
            <p
              className={`text-sm font-semibold ${
                coin.trend.startsWith("-")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {coin.trend}
            </p>
          </div>

          {/* Price + name */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{coin.price}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {coin.name} - {coin.symbol}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
