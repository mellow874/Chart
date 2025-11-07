import React from "react";

import ETH from "../assets/ETH Trans.png";
import BTC from "../assets/BTC Trans.png";
import BTC2 from "../assets/2BTC Trans.png";
import ITC from "../assets/ITC Trans.png";

export default function Transactions() {
    const coins = [
        {
            logo: ETH,
            name: "Ethereum",
            transaction: "Received",
            price: "24,102 USD",
            date: "Today, 19:30",
        },
        {
            logo: BTC,
            name: "Bitcoin",
            transaction: "Buy",
            price: "4,1576 USD",
            date: "Today, 14:32",
        },
        {
            logo: BTC2,
            name: "Bitcoin",
            transaction: "Buy",
            price: "64,784 USD",
            date: "Today, 13:50",
        },
        {
            logo: ITC,
            name: "Litecoin",
            transaction: "Buy",
            price: "14,265 USD",
            date: "Today, 09:38",
        },
    ];

    return (
        //Ensures that the transaction sectionn is on the left side
        <section className="ml-30">
            <h2 className="text-2xl font-semibold text-heading mb-4">Transactions</h2>

            <div className="space-y-4">
                {coins.map((coin, index) => (
                    //Everything stays in a grid format
                    <div key={index} className="grid grid-cols-[auto_1fr_auto_auto_1fr] items-center gap-x-2">

                        <img
                            src={coin.logo}
                            alt={coin.name}
                            className="w-[50px] h-[50px] object-contain space-x-1"
                        />
                    <div className="col-span-2 flex flex-col">
                            <p className="font-semibold space-x-2 text-gray-800">{coin.name}</p>
                            <p className="text-xs text-gray-500">{coin.transaction}</p>
                        </div>

                        <div className="ml-40">
                            <p className="font-semibold text-gray-800">${coin.price.split(' ')[0]}</p>
                            <p className="text-xs text-gray-500">{coin.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
