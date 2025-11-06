import React from "react";
import { FiSearch, FiBell, FiHelpCircle, FiChevronDown, FiMenu } from "react-icons/fi";

export default function Header({ onMenuClick }) {
    return (
        //Navigation bar at the top, with the searchbar, icons, and user profile
        <header className="w-full flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">
            
            {/*Hamburger icon, that appears onlyon mobile view and when clicked the sidebar appears*/}
            <button className="lg:hidden text-gray-600" onClick={onMenuClick}>

                {/*toggle button*/}
                <FiMenu className="text-2xl" />
            </button>

            {/* Searchbar which contains the input field and search icon*/}
            <div className="flex items-center gap-2 w-[320px] border border-gray-400 rounded-[10px] px-3 py-2 bg-white">
                <input
                    type="text"
                    placeholder="Search type of keywords"
                    className="flex-1 outline-none text-help"
                />
                <FiSearch className="text-help"/>
            </div>

            {/*Has the help icon, bell and user profile*/}
            <div className="flex items-center gap-6 text-help">
                {/* Notification bell */}
                <FiBell className="text-2xl" />

                {/* Help icon */}
                <FiHelpCircle className="text-2xl" />

                {/* --- Profile info ---
                    - Displays user's avatar, name, username, and dropdown icon
                */}
                <div className="flex items-center gap-3">
                    {/* User avatar */}
                    <img src="/profile.jpg" className="w-8 h-8 rounded-full bg-help" alt="Profile" />
                    
                    {/*User profile details*/}
                    <div className="flex flex-col">
                        <p className="text-[14px] font-bold text-black">Laurice</p>
                        <p className="text-sm text-help">@laurice22</p>
                    </div>

                    {/* Dropdown arrow icon */}
                    <FiChevronDown className="text-help" />
                </div>
            </div>
        </header>
    );
}
