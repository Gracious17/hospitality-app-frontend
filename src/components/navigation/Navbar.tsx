import Link from "next/link";
import React from "react";
import ButtonBlue from "../button/ButtonBlue";
import { AlignRight } from "lucide-react";
import ButtonBorderBlue from "../button/ButtonBorderBlue";
import Image from "next/image";
import navIcon from "@/../public/Kakrol.png";
import FlagDropDown from "./dropDown/FlagDropDown";
import LanguageSelect from "../langDropDown/LangDrop";
import NgnDropDown from "../langDropDown/NgnDropDown";
interface props {
  openNav: () => void;
}
const Navbar = ({ openNav }: props) => {
  return (
    // first nav
    <div className="h-[10vh] bg-white shadow-md w-full">
      <div className="w-[100%] flex items-center justify-around mx-auto h-[13vh]">
        <div className="flex items-center">
          <h1 className="text-[16px] md:text-[25px] font-bold text-slate-800 flex items-center">
            <span>
              <Image src={navIcon} width={30} height={30} alt="nav icon" />
            </span>
            <span className="text-[16px] md:text-[25px]  text-[#5627FF]">
              Find
            </span>
            Peace
          </h1>
        </div>
        {/* larger screen nav list */}
        <ul className="hidden lg:flex items-center space-x-10">
          <li className="hover:border-b-4  cursor-pointer border-[#5627FF] pb-6 hover:text-[#5627FF]">
            <Link href="#">Hotels</Link>
          </li>
          <li className="hover:border-b-4  cursor-pointer border-[#5627FF] pb-6 hover:text-[#5627FF]">
            <Link href="#">Flights</Link>
          </li>

          <li className="hover:border-b-4  cursor-pointer border-[#5627FF] pb-6 hover:text-[#5627FF]">
            <Link href="#">Car Rentals</Link>
          </li>
          <li className="hover:border-b-4  cursor-pointer border-[#5627FF] pb-6 hover:text-[#5627FF]">
            <Link href="#">Events</Link>
          </li>
        </ul>
        <div className="flex  md:space-x-5">
          <FlagDropDown />
          <LanguageSelect />
          <NgnDropDown />
          {/* LogIn */}
          <ButtonBorderBlue text="SignIn" />
          {/* SignUp */}
          <ButtonBlue text="SignUp" />
          {/* Authenticated user profile image  on the nav */}
          <div className="flex  items-center text-center mb-2">
            <div className=" rounded-full p-4 bg-blue-400">
              <Image src={""} width={20} height={20} alt="" />
            </div>
            <p>Solish OluwaSeun</p>
          </div>
          <AlignRight
            onClick={openNav}
            className="w-[3.5rem] md lg:hidden h-[1.5rem] text-slate-900 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
