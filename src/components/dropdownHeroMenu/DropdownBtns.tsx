"use client";
import { useState } from "react";
import FlightDropDown from "../flightOnHero/FlightDropDown";
import CarRentalDropDown from "../carRentalOnHero/CarRentalDropDown";
import EventsDropDown from "../eventsOnHero/EventsDropDown";
import { Hotel, Plane, Car, Calendar } from "lucide-react"; // Import icons
import HeroSearch from "../heroSearchBar/HeroSearch";

const DropdownBtns = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Defineed buttons with their respective components and icons
  const dropdownItems = [
    {
      title: "Hotels",
      component: <HeroSearch />,
      icon: Hotel,
    },
    {
      title: "Flights",
      component: <FlightDropDown />,
      icon: Plane,
    },
    {
      title: "Car Rentals",
      component: <CarRentalDropDown />,
      icon: Car,
    },
    {
      title: "Events",
      component: <EventsDropDown />,
      icon: Calendar,
    },
  ];

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* drop down btns */}
      <div className="flex space-x-4  w-full  items-center justify-center">
        {dropdownItems.map((item, index) => {
          const IconComponent = item.icon;
          const uniqueStyle =
            index === 0
              ? "rounded-l-md"
              : index === dropdownItems.length - 1
              ? "rounded-r-md"
              : "";

          return (
            <div key={index} className="relative bg-transparent ">
              <button
                onClick={() => toggleDropdown(index)}
                className={`w-full flex  backdrop-blur-md items-center group gap-2 px-5 py-3 text-white bg-transparent  transition-all duration-300 hover:bg-white hover:text-black ${uniqueStyle}`}
              >
                <IconComponent
                  className="text-white group-hover:text-[#5627FF] transition-colors duration-300"
                  size={25}
                />
                {item.title}
              </button>
              {/* drop down component */}
              {openIndex === index && (
                <div className="absolute left-0 mt-1 text-black   bg-white    rounded-md shadow-lg z-[200]  w-[50rem]">
                  {item.component}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownBtns;
