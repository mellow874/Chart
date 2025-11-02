import React from "react"; 
//Imported react-icons
import { TbInfinity } from "react-icons/tb";
import { FiPieChart, FiRepeat, FiCreditCard, FiMail, FiSettings, FiLogOut} from "react-icons/fi";
import { AiFillAppstore } from "react-icons/ai";

export default function Navbar() {
    return (
        <div className="flex h-screen bg-light-gray">

           {/*Sidebar*/}
           <nav className="px-8 py-6  flex flex-col fixed w-[263px]  h-[1,025px] border-r border-r-[1px]">
            {/*Logo*/}
            <div className="flex items-center mb-10 gap-[20px]">
                <TbInfinity className="text-3xl align-middle text-purple-600"/>
                <h1 className="font-inter font-bold text-[21px] leading-[100%] tracking-[0%] align-middle flex items-center gap-2 text-black">
                    CryptX
                </h1>
            </div>
            {/*Navlist */}
            <ul className="flex flex-col gap-5  mb-4 pb-2 flex items-center text-gray">
                <li className="text-purple flex items-center gap-[20px] font-semibold"> 
                    <AiFillAppstore className="text-xl"/>
                    Overview       
                    <span className="absolute right-10 top-20 text-3xl w-1 h-6 text-purple">.</span>         
                </li>
                <li className="flex items-center gap-[20px]"> {/*Ensures that the icon and it's name are inline */}
                    <FiPieChart/>
                    Chart
                </li>
                <li className="flex items-center gap-[20px]"> 
                    <FiRepeat/>
                    Transactions
                </li>
                <li className="flex items-center gap-[20px]">
                    <FiCreditCard/>
                    Wallet
                </li>
                <li className="flex items-center gap-[20px]">
                    <FiMail/>
                    Mailbox
                </li>
                <li className="flex items-center gap-[20px]">
                    <FiSettings/>
                    Setting
                </li>
                <li className="flex items-center gap-[20px]">
                    <FiLogOut/>
                    Logout
                </li>
            </ul>
           </nav>
        </div>
    );
}