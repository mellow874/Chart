import React from "react";

// import images
import BTCLogo from "../assets/BTC logo.png";
import BTCGraph from "../assets/BTC graph.png";
import ETHLogo from "../assets/ETH logo.png";
import ETHGraph from "../assets/ETH graph.png";
import ADALogo from "../assets/ADA logo.png";
import ADAGraph from "../assets/ADA graph.png";
import ITCLogo from "../assets/ITC logo.png";
import ITCGraph from "../assets/ITC graph.png";

export default function LiveMarket() {
  const coins = [
    {
      logo: ETHLogo,
      graph: ETHGraph,
      name: "Ethereum",
      symbol: "ETH / USDT",
      change: "+14.02%",
      price: "39,786 USD",
      changeColor: "text-green-500",
    },
    {
      logo: BTCLogo,
      graph: BTCGraph,
      name: "Bitcoin",
      symbol: "BTC / USDT",
      change: "+4.02%",
      price: "21,786 USD",
      changeColor: "text-green-500",
    },
    {
      logo: ITCLogo,
      graph: ITCGraph,
      name: "Litecoin",
      symbol: "LTC / USDT",
      change: "-9.02%",
      price: "9,786 USD",
      changeColor: "text-red-500",
    },
    {
      logo: ADALogo,
      graph: ADAGraph,
      name: "Cardano",
      symbol: "ADA / USDT",
      change: "+4.86%",
      price: "4,786 USD",
      changeColor: "text-green-500",
    },
  ];

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Live Market</h2>

      <div>
        {coins.map((coin, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-x-4 items-center py-2 text-sm"
          >
            {/* Coin logo */}
            <img
              src={coin.logo}
              alt={coin.name}
              className="w-12 h-12 object-contain"
            />

            {/* Coin name + symbol */}
            <div>
              <p className="font-semibold text-gray-800">{coin.name}</p>
              <p className="text-xs text-gray-500">{coin.symbol}</p>
            </div>

            {/* Change */}
            <div>
              <p className="text-xs text-gray-500">Change</p>
              <p className={`font-semibold ${coin.changeColor}`}>
                {coin.change}
              </p>
            </div>

            {/* Price */}
            <div>
              <p className="text-xs text-gray-500">Price</p>
              <p className="font-semibold text-gray-800">{coin.price}</p>
            </div>

            {/* Chart image */}
            <img
              src={coin.graph}
              alt={`${coin.name} chart`}
              className="w-full h-6 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}