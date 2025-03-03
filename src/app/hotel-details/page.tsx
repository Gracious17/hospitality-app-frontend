import React from "react";
import {
  Ban,
  LucideLocateFixed,
  ParkingCircle,
  Waves,
  Wifi,
} from "lucide-react";

import TabSection from "@/components/tabSection/tabSection";
import Image from "next/image";
import GuestReviews from "@/components/tabSection/GuestR";
import GuestPolicies from "@/components/tabSection/GuestPolicies";
import ImportantInfo from "@/components/tabSection/ImportantInfo";
import SimilarHotels from "@/components/tabSection/SimilarHotels";

const Page = () => {
  const facilities = [
    { name: "No Smoking", icon: <Ban className="text-blue-600 w-5 h-5" /> },
    {
      name: "Parking",
      icon: <ParkingCircle className="text-blue-600 w-5 h-5" />,
    },
    {
      name: "Swimming Pool",
      icon: <Waves className="text-blue-600 w-5 h-5" />,
    },

    { name: "Free WiFi", icon: <Wifi className="text-blue-600 w-5 h-5" /> },
  ];

  const images = [
    "pixasquare-4ojhpgKpS68-unsplash.jpg",
    "dets2.jpg",
    "dets1.png",
    "dets2.jpg",
    "dets2.jpg",
    "dets1.png",
  ];
  return (
    <div className="flex flex-col gap-8 px-4 md:px-8 lg:px-16 py-8">
      {/* Header Section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            Citilodge Hotel Lagos
          </h1>
          <div className="flex gap-1 text-yellow-500 text-lg">
            {[...Array(4)].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <LucideLocateFixed className="text-blue-600" size={20} />
          <p className="text-sm md:text-lg">
            No.1 Goshen Estate Road, Victoria Island, Lagos, Nigeria 105102
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 grid-flow-dense h-[50vh]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-md 
          ${index === 0 ? "lg:row-span-4" : ""}
          ${index === 1 ? "lg:row-span-2" : ""}
          ${index === 2 ? "lg:col-span-2 lg:row-span-2" : ""}
          ${index === 3 ? "lg:row-span-2" : ""}
          ${index === 4 ? "lg:row-span-2" : ""}
          ${index === 5 ? "lg:row-span-2" : ""}
        `}
          >
            <Image
              src={`/${image}`}
              alt="Hotel Image"
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-10 py-6">
        <div className="lg:w-2/3 space-y-6 text-gray-600">
          <p className="leading-relaxed text-base md:text-[17px]">
            Eko Hotels & Suites offers premium 3-star accommodation in Lagos,
            featuring an outdoor pool and sauna.
          </p>

          <p className="leading-relaxed text-base md:text-[17px]">
            With 824 well-appointed rooms, the hotel has recently been
            refurbished. Guests can enjoy various recreational activities,
            including a BBQ/picnic area and a playground. Each room is equipped
            with a refrigerator and minibar.
          </p>

          <p className="leading-relaxed text-base md:text-[17px]">
            Murtala Muhammed International Airport is a 50-minute drive from Eko
            Hotels & Suites. The hotel's multilingual staff ensures every guest
            enjoys a comfortable stay.
          </p>

          <div className="pt-5">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Most Popular Facilities
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-gray-700">
              {facilities.map(({ name, icon }) => (
                <div key={name} className="flex items-center gap-2">
                  {icon}
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 h-[300px] md:h-[350px] bg-gray-100 rounded-xl flex items-center justify-center shadow-lg">
          <button className="w-4/5 md:w-3/4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
            Show On Map
          </button>
        </div>
      </div>

      <TabSection />
      <GuestReviews />
      <GuestPolicies />
      <ImportantInfo />
      <SimilarHotels />
    </div>
  );
};

export default Page;
