"use client";
import { useState } from "react";
import Rooms from "@/components/tabSection/Rooms";
import GuestReviews from "@/components/tabSection/GuestReviews";
import ServicesAndAmenities from "@/components/tabSection/ServicesAndAmenities";
import Policies from "@/components/tabSection/Policies";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("rooms");
  const tabs = [
    { name: "Rooms", component: <Rooms /> },
    { name: "Guest Reviews", component: <GuestReviews /> },
    { name: "Services and Amenities", component: <ServicesAndAmenities /> },
    { name: "Policies", component: <Policies /> },
  ];

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex border-b-2 border-gray-200 gap-8 md:gap-16 lg:gap-32 text-gray-600 text-sm md:text-base font-medium">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`pb-2 transition-colors duration-300 ${
              activeTab === tab.name
                ? "border-blue-500 text-[#5627FF] border-b-2"
                : "hover:text-[#5628FF]"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Display the Active Tab's Component */}
      <div className=" rounded-lg shadow-sm">
        {tabs.find((tab) => tab.name === activeTab)?.component}
      </div>
    </div>
  );
};

export default TabSection;
