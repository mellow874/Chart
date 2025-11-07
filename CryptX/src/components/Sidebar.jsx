import React from "react";
//import icons
import { AiFillAppstore } from "react-icons/ai";
import {FiX } from "react-icons/fi";
//import image
import Logo from "../assets/Logo.png";
import Logout from "../assets/logout.png";
import sms from "../assets/sms.png";
import walletminus from "../assets/wallet-minus.png";
import wallet2 from "../assets/wallet-2.png";
import Setting from "../assets/setting-2.png";
import graph from "../assets/graph.png";


export default function Sidebar({ isOpen, onClose }) {
    return (
        <>
            {/*overlay background on mobile view so you may focus on sidebar with toogle button*/}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={onClose}></div>

            {/* Sidebar fixed on the left, and slides in and out on mobile view*/}
            <nav className={`fixed top-0 left-0 w-[263px] h-full bg-[#F4F5FA] px-8 py-6 flex flex-col z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                {/* toggle button available on mobile view, and allows user to close it*/}
                <button className="lg:hidden absolute top-6 right-6 text-gray-600" onClick={onClose}>
                    <FiX className="text-2xl" />
                </button>

                {/* Logo appears at the top of the list items*/}
                <img src={Logo} className="flex items-center mb-10" alt="Logo"/>

                {/* Sidebar list items, that include icons*/}
                <ul className="flex flex-col gap-5 mb-4 pb-2 text-coin"> {/*Ensures that the list is in a row... */}
                    
                    {/* Purple list item, to show that it's active*/}
                    <li className="text-purple flex items-center gap-5 font-semibold relative">
                        <AiFillAppstore className="text-xl" />
                        Overview
                        <span className="absolute right-0 text-3xl w-1 h-6 text-purple">.</span>
                    </li>

                    {/* Sidebar menu items which are centred, and have got equal spacing*/}
                    <li className="flex items-center gap-5">
                        <img src={graph} alt="Chart" className="w-4 h-auto object-contain"/>
                        Chart
                    </li>
                    <li className="flex items-center gap-5">
                        <img src={wallet2} alt="Wallet" className="w-4 h-auto object-contain"/>
                        Transactions
                    </li>
                    <li className="flex items-center gap-5">
                        <img src={walletminus} alt="Wallet Minus" className="w-4 h-auto object-contain"/>    
                        Wallet
                    </li>
                    <li className="flex items-center gap-5">
                        <img src={sms} alt="SMS" className="w-4 h-auto object-contain"/>
                        Mailbox
                    </li>
                    <li className="flex items-center gap-5">
                       <img src={Setting} alt="Setting" className="w-4 h-auto object-contain"/>
                        Setting
                    </li>
                    <li className="flex items-center gap-5 ">
                      <img src={Logout} alt="Logout" className="w-4 h-auto object-contain"/>
                        Logout
                    </li>
                </ul>
            </nav>
        </>
    );
}
