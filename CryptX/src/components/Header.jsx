import React from "react";
import Sidebar from "./Sidebar";
//import react-icons
import {FiSearch, FiBell, FiHelpCircle, FiChevronDown} from "react-icons/fi";

export default function Header() {
    return (
        <div className="flex h-screen bg-light-gray">
            {/*Sidebar */}
            <Sidebar/>
            {/*Main section*/}
            <div className="flex flex-col flex-1">
        <header className="w-full flex items-center justify-between px-8 py-4 bg-white border-b border-bg-gray-200">
            {/*Searchbar */}
            <div className="flex items-center rounded-md gap-2 w-[320px] bg-gray">
                <input type="text" placeholder="Search type of keywords" className="border-gray"/>
                <FiSearch className="text-gray"/>
            </div>

            {/*Side icons*/}
            <div className="flex items-center text-help gap-6">
                <FiBell className="text-2xl" />
                <FiHelpCircle className="text-2xl" />

                {/*Profile */}
                 <div className="w-10 h-10 bg-help rounded-full flex items-center justify-center"></div>
                 {/* Username + Arrow */}
                 <div className="flex flex-col leading-tight">
                    <p className="text-[14px] font-bold text-gray-700">Laurice</p>
                    <FiChevronDown className="text-gray right-8" />
                    <p className="text-gray text-sm">@laurice22</p>
                </div>
            </div>
        </header>
        </div>
        </div>
            
    );
}