import React from "react";
//import images
import BTCLogo from "../assets/BTC logo.png";
import BTCGraph from "../assets/BTC graph.png";
import ETHLogo from "../assets/ETH logo.png";
import ETHGraph from "../assets/ETH graph.png";
import ADALogo from "../assets/ADA logo.png";
import ADAGraph from "../assets/ADA graph.png";
import ITCLogo from "../assets/ITC logo.png";
import ITCGraph from "../assets/ITC graph.png";

export default function LiveMarket() {
    //Array of objects which include the logo, image, name, price, symbol...
    const coins = [
        {
            logo: ETHLogo,
            graph: ETHGraph,
            name: "Ethereum",
            symbol: "ETH / USDT",
            change: "+14.02%",
            price: "39,786 USD",
        },
        {
            logo: BTCLogo,
            graph: BTCGraph,
            name: "Bitcoin",
            symbol: "BTC / USDT",
            change: "+4.02%",
            price: "21,786 USD",
        },
        {
            logo: ITCLogo,
            graph: ITCGraph,
            name: "Litecoin",
            symbol: "LTC / USDT",
            change: "-9.02%",
            price: "9,786 USD",
        },
        {
            logo: ADALogo,
            graph: ADAGraph,
            name: "Cardano",
            symbol: "ADA / USDT",
            change: "+4.86%",
            price: "4,786 USD",
        },
    ];

    return (
        <section>
            {/*Heading of the section*/}
            <h2 className="text-2xl font-semibold text-heading mb-4">Live Market</h2>

            <div className="space-y-4">
                {/*Map of the array, showing how the objects should align */}
                {coins.map((coin, index) => (
                    <div key={index} className="grid grid-cols-[auto_1fr_auto_auto_1fr] gap-x-2 items-center">
                        
                        {/*Logo images for the livemarket*/}
                        <img src={coin.logo} alt={coin.name} className="w-[50px] h-[50px] object-contain"/>

                        <div>
                            <p className="font-semibold text-heading">{coin.name}</p>
                            <p className="text-xs text-coin">{coin.symbol}</p>
                        </div>

                        <div>
                            <p className="text-xs text-coin market">Change</p>
                            <p className={`font-semibold ${coin.change}`}>
                                {coin.change}
                            </p>
                        </div>

                    
                        <div className="ml-10">
                            <p className="text-x text-gray-500">Price</p>
                            <p className="font-semibold text-gray-800">{coin.price}</p>
                        </div>

                        <img
                            src={coin.graph}
                            alt={`${coin.name} chart`}
                            className="w-full h-8 object-contain ml-4"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
