import Link from "next/link";
import React from "react";
import ButtonBlue from "../button/ButtonBlue";
import { Menu } from "lucide-react";
import ButtonBorderBlue from "../button/ButtonBorderBlue";
import Image from "next/image";
import navIcon from "@/../public/Kakrol.png";
import FlagDropDown from "./dropDown/FlagDropDown";
import LanguageSelect from "../langDropDown/LangDrop";
import NgnDropDown from "../langDropDown/NgnDropDown";
import profile from "@/../public/profile.png";
interface props {
  openNav: () => void;
}

const Navbar = ({ openNav }: props) => {
  return (
    // first nav
    <div className="h-[10vh] bg-white shadow-md w-full items-center mb-2">
      <div className="w-[100%] flex items-center  text-center justify-between lg:justify-around md:justify-around  mx-auto h-[13vh]">
        <div className="flex items-center">
          <h1 className="text-[16px] md:text-[25px] font-bold text-slate-800 flex items-center lg:pb-4">
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
          <li className="hover:border-b-4  rounded-full cursor-pointer border-[#5627FF] pb-5 hover:text-[#5627FF] transition-all duration-500">
            <Link href="/">Hotels</Link>
          </li>
          <li className="hover:border-b-4 rounded-full  cursor-pointer border-[#5627FF] pb-5 hover:text-[#5627FF] transition-all duration-500">
            <Link href="#">Flights</Link>
          </li>

          <li className="hover:border-b-4 rounded-full  cursor-pointer border-[#5627FF] pb-5 hover:text-[#5627FF] transition-all duration-500">
            <Link href="#">Car Rentals</Link>
          </li>
          <li className="hover:border-b-4  rounded-full cursor-pointer border-[#5627FF] pb-5 hover:text-[#5627FF] transition-all duration-500 ">
            <Link href="#">Events</Link>
          </li>
        </ul>

        <div className="flex  md:space-x-5">
          {/* input dropdown on the nav */}
          <div className="hidden lg:flex items-center text-center mb-2">
            <FlagDropDown />
            <LanguageSelect />
            <NgnDropDown />
          </div>

          <div className="flex  items-center text-center mb-2">
            <div className="  lg:flex  md:space-x-5">
              {/* LogIn */}
              <div className="hidden lg:flex gap-2">
                <ButtonBorderBlue text="SignIn" />
                {/* SignUp */}
                <ButtonBlue text="SignUp" />
                {/* Authenticated user profile image  on the nav */}
                <div className="hidden lg:flex  items-center text-center mb-2">
                  <div className=" rounded-full ">
                    <Image
                      src={profile}
                      width={30}
                      height={30}
                      alt="profile image"
                    />
                  </div>
                  <p className="text-sm">Solish OluwaSeun</p>
                </div>
              </div>
              <Menu
                onClick={openNav}
                className="w-[4.5rem]  lg:hidden h-[2.5rem] text-slate-900 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
