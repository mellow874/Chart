import React from "react";
//import react icons
import {FaBitcoin, FaEthereum} from "react-icons/fa";
import {SiLitecoin, SiCardano} from "react-icons/si";

export default function Coins() {
    const coins= [
        {
            name: "Bitcoin",
            symbol: "BTC",
            bg: "bg-btc",
            color: "text-btc", 
            price: "$40, 291", 
            trend: "+0.25%",
            icon: <FaBitcoin/>,
        },
        {
            name: "Bitcoin",
            symbol: "BTC",
            bg: "bg-btc",
            color: "text-btc", 
            price: "$40, 291", 
            trend: "+0.25%",
            icon: <FaEthereum/>,
        },
        {
            name: "Bitcoin",
            symbol: "BTC",
            bg: "bg-btc",
            color: "text-btc", 
            price: "$40, 291", 
            trend: "+0.25%",
            icon: <SiLitecoin/>,
        },
        {
            name: "Bitcoin",
            symbol: "BTC",
            bg: "bg-btc",
            color: "text-btc", 
            price: "$40, 291", 
            trend: "+0.25%",
            icon: <SiCardano/>,
        },
    ];
    return(
        <div></div>
    );
}