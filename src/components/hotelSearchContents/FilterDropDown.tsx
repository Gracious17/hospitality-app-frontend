"use client";
import React, { useState } from "react";

// Filter Data
const filters = [
  {
    title: "Guest Rating",
    type: "radio",
    options: [
      { label: "9+ Exceptional", count: 20 },
      { label: "8+ Excellent", count: 20 },
      { label: "7+ Very Good", count: 20 },
      { label: "6+ Good", count: 20 },
    ],
  },
  {
    title: "Amenities",
    type: "checkbox",
    options: [
      { label: "Parking", count: 12 },
      { label: "Swimming Pool", count: 24 },
      { label: "Restaurant", count: 8 },
      { label: "Room Service", count: 62 },
      { label: "Fitness Center", count: 21 },
    ],
  },
  {
    title: "Property Type",
    type: "checkbox",
    options: [
      { label: "Aparthotel", count: 20 },
      { label: "Apartment", count: 5 },
      { label: "Guest House", count: 12 },
      { label: "Hotel", count: 23 },
      { label: "Lodge", count: 35 },
    ],
  },
];

const FilterDropdown = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  // Toggle dropdown section
  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="w-full space-y-4">
      {filters.map((filter) => (
        <div key={filter.title} className="border rounded-md p-3 shadow-sm">
          {/* hotel search Section Toggle Button */}
          <button
            onClick={() => toggleSection(filter.title)}
            className="flex justify-between items-center w-full text-left font-semibold text-gray-800"
          >
            {filter.title}
            <span className="text-gray-500">
              {openSections[filter.title] ? "▲" : "▼"}
            </span>
          </button>

          {/* hotel search Dropdown Content */}
          {openSections[filter.title] && (
            <div className="mt-2 space-y-2">
              {filter.options.map((option) => (
                <label
                  key={option.label}
                  className="flex items-center space-x-2"
                >
                  <input
                    type={filter.type}
                    name={filter.type === "radio" ? filter.title : option.label}
                    className="w-4 h-4 text-blue-600"
                  />
                  <div className="flex justify-between w-full">
                    <span className="text-gray-700">{option.label}</span>
                    <span className="text-gray-500">{option.count}</span>
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterDropdown;
