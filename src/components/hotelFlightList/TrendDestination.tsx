import React from "react";

const TrendDestination = () => {
  return (
    <div className="pt-[3rem] pb-4 bg-white">
      <div className="w-[80%] mx-auto grid grid-cols-1  pb-[2rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] items-start">
        {/* first  info */}
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px]  font-semibold mb-[1.5rem] cursor-context-menu flex items-center">
            Hotel In Trend Destinations
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer ">
            Hotel in abuja
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer ">
            Flight to Uyo
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer ">
            Flight to Asaba
          </p>
        </div>
        {/* second  info */}
        <div className="md:mx-auto mx-0">
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer">
            Hotel in Laggos
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer ">
            Flight to kano
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer ">
            Flight to Benin City
          </p>
        </div>
        {/* 3rd  info */}
        <div className="md:mx-auto mx-0">
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer">
            Flight to Portharcourt
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer ">
            Flight to Enugu
          </p>
        </div>
        {/* 4th  info */}
        <div className="md:mx-auto mx-0">
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer">
            Flight to Owerri
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer ">
            Flight to katsina
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrendDestination;
