import React from "react";
interface props {
  text: string;
}
const ButtonBorderBlue = ({ text }: props) => {
  return (
    <button className="rounded-md px-4 py-1 text-[15px] mb-2 md:px-4 md:py-1 overflow-hidden group bg-white relative hover:bg-gradient-to-r hover:from-[#5627FF] hover:to-blue-400 text-[#5627FF] hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 border-2 border-[#5627FF] hover:text-white">
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 group-hover:-translate-x-40 bg-white opacity-10 rotate-12 ease"></span>
      <span className="relative ">{text} </span>
    </button>
  );
};

export default ButtonBorderBlue;
