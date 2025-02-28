"use client";
import Image from "next/image";
import React from "react";
import { Slider } from "@/components/ui/slider";
import RatingDropDown from "./RatingDropDown";
import FilterDropdown from "./FilterDropDown";

const hotelsListingData = [
  {
    id: 1,
    name: "Lagos Oriental Hotel",
    location: "Victoria Island",
    distance: "11.5km to city center",
    price: "₦133,689",
    image:
      "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
    amenities: ["🚭 No Smoking", "🅿 Parking", "🏊‍♂️ Swimming Pool"],
  },
  {
    id: 2,
    name: "Lagos Oriental Hotel",
    location: "Victoria Island",
    distance: "11.5km to city center",
    price: "₦133,689",
    image:
      "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
    amenities: ["🚭 No Smoking", "🅿 Parking", "🏊‍♂️ Swimming Pool"],
  },
  {
    id: 3,
    name: "Lagos Oriental Hotel",
    location: "Victoria Island",
    distance: "11.5km to city center",
    price: "₦133,689",
    image:
      "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
    amenities: ["🚭 No Smoking", "🅿 Parking", "🏊‍♂️ Swimming Pool"],
  },
  {
    id: 4,
    name: "Lagos Oriental Hotel",
    location: "Victoria Island",
    distance: "11.5km to city center",
    price: "₦133,689",
    image:
      "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
    amenities: ["🚭 No Smoking", "🅿 Parking", "🏊‍♂️ Swimming Pool"],
  },
  {
    id: 5,
    name: "Lagos Oriental Hotel",
    location: "Victoria Island",
    distance: "11.5km to city center",
    price: "₦133,689",
    image:
      "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
    amenities: ["🚭 No Smoking", "🅿 Parking", "🏊‍♂️ Swimming Pool"],
  },
  {
    id: 6,
    name: "Lagos Oriental Hotel",
    location: "Victoria Island",
    distance: "11.5km to city center",
    price: "₦133,689",
    image:
      "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
    amenities: ["🚭 No Smoking", "🅿 Parking", "🏊‍♂️ Swimming Pool"],
  },
];

const HotelListing = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 ">
        {/* Left container  section) */}
        <div className="w-1/3   md:flex md:flex-col hidden sm:flex lg:flex gap-4 ">
          <div>google map here</div>
          {/* slider */}
          <div className="py-8 px-8 rounded-md bg-white shadow-md text-left">
            <p className="text-sm text-left font-semibold">price</p>
            <hr />
            <div>
              <div className="flex justify-between pb-2 space-x-20 items-center text-center ">
                <span className="text-gray-500  ">#133,689</span>
                <span className="text-gray-500 ml-9">#133,689</span>
              </div>
              <Slider defaultValue={[33]} max={1000} step={1} />
            </div>
          </div>
          {/* rating dropdown */}
          <div className="py-8 px-8 rounded-md bg-white shadow-md text-left">
            <p className="text-sm text-left font-semibold">Star</p>
            <hr />
            <div>
              <div className="flex  pb-2 space-x-20 items-center text-center "></div>
              <RatingDropDown />
            </div>
          </div>
          <FilterDropdown />
          Left
        </div>

        {/* Right section  containers */}
        <div className="flex flex-col sm:w-2/3 gap-4 w-full">
          <div className="h-20 ">
            <h2>ikja 23 properpies found</h2>
            <div>
              <input type="text" placeholder="filter" />
              <input type="text" placeholder="filter" />
              <input type="text" placeholder="filter" />
            </div>
          </div>
          <div className=" bg-gray-200 space-y-2">
            {hotelsListingData.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row gap-4"
              >
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  width={300}
                  height={200}
                  className="w-full md:w-40 h-40 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{hotel.name}</h3>
                  <p className="text-sm">{hotel.location}</p>
                  <p className="text-xs text-gray-500">{hotel.distance}</p>
                  <div className="flex gap-2 text-xs ">
                    {hotel.amenities.map((amenity) => (
                      <span key={amenity}>{amenity}</span>
                    ))}
                  </div>
                </div>
                <div className="text-right space-y-2 border-l-2 pl-4 mt-4">
                  <p className="text-xl font-bold text-[#5627FF] ">
                    {hotel.price}
                  </p>
                  <p className="text-xs">per Night</p>
                  <button className=" text-white px-4 py-2 rounded bg-[#5627FF]">
                    Check Availability
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelListing;
