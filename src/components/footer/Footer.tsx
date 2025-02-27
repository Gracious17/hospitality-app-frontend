import Image from "next/image";
import React from "react";
import footerIcon from "@/../public/Kakrol.png";
import CurrencySelect from "../currencyDropdown/CurrencySelect";
const Footer = () => {
  return (
    <div className="pt-[3rem] pb-[3rem] bg-[#F5F5F5]">
      <div className="w-[80%] mx-auto grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-[2rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] items-start">
        {/* first footer info */}
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px]  font-semibold mb-[1.5rem] cursor-context-menu flex items-center">
            <span>
              <Image
                src={footerIcon}
                width={30}
                height={30}
                alt="Footer  Icon"
              />
            </span>
            <span className="text-[#5627FF]">Find</span>
            peace
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, fugit
            debitis adipisci dolorem odit animi maiores sed libero error culpa
            nulla, illo reiciendis modi perspiciatis, dolorum voluptatibus quae
            aperiam. Quos.
          </p>
        </div>
        {/* second footer info */}
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem] cursor-context-menu ">
            Company
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer">
            About Us
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer ">
            Affiliate
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer ">
            Blog
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer ">
            Contact Us
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer ">
            Permission
          </p>
        </div>
        {/* 3rd footer info */}
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]  cursor-context-menu">
            Use Links
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer">
            Privacy
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer ">
            FAQ
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer ">
            Terms and Conditions
          </p>
        </div>
        {/* 4th footer info */}
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[0.7rem] cursor-context-menu">
            Currency
          </h1>

          <p className="text-black opacity-80 mb-[1rem] text-[15px]">
            <CurrencySelect />
          </p>
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-[1rem] text-[15px] opacity-75 flex justify-between">
        <div>
          &copy; {new Date().getFullYear()} Copywriting © 2024 Find Peace. All
          rights reserved
        </div>
        <div>some icons here</div>
      </div>
    </div>
  );
};

export default Footer;
