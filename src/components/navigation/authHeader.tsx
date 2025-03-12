"use client";

import React from "react";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import nigeriaIcon from "../../../public/nigeria-icon.png";

const AuthHeader = () => {
  return (
    <header className="flex justify-between items-center px-6 md:px-16 py-4 border-b border-gray-200 w-full text-sm">
      {/* Left Section - "Find Peace" */}
      <h1 className="text-[18px] md:text-[20px] font-bold text-slate-800 flex items-center">
        <span className="text-[#5627FF]">Find</span>
        <span className="">Peace</span>
      </h1>
      <div className="flex md:hidden">
        <Menu />
      </div>
      {/* Right Section - Controls */}
      <div className="hidden md:flex  items-center space-x-4">
        {/* Country Selector */}
        <div className="flex items-center space-x-1 cursor-pointer border-r border-gray-300 pr-2">
          <Image src={nigeriaIcon} alt="Nigeria Icon" height={20} width={20} />
          <ChevronDown className="text-gray-500 w-4 h-4" />
        </div>

        {/* Language Dropdown */}
        <div className="flex items-center space-x-1 cursor-pointer border-r border-gray-300 pr-2">
          <span className="text-gray-700">EN</span>
          <ChevronDown className="text-gray-500 w-4 h-4" />
        </div>

        {/* Currency Dropdown */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <span className="text-gray-700">NGN</span>
          <ChevronDown className="text-gray-500 w-4 h-4" />
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;
