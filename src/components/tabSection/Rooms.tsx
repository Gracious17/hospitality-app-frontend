"use client";
import Image from "next/image";
import React, { useState } from "react";
// import hotelImage from "../../../public/pixasquare-4ojhpgKpS68-unsplash.jpg";
import { AirVent, Ban, Car, Wifi, User, Check } from "lucide-react";
import { useHotelDetailStore } from "@/lib/store/useBookingStore";
// Map amenities to icons
const amenityIcons = {
  wifi: <Wifi size={16} className="text-gray-700" />,
  "air conditioning": <AirVent size={16} className="text-gray-700" />,
  "no smoking": <Ban size={16} className="text-red-500" />,
  printer: <Check size={16} className="text-green-500" />,
  desk: <Car size={16} className="text-gray-700" />,
};
const choices = [
  {
    icon: <Check size={16} className="text-green-500" />,
    text: "Breakfast for $13.99 (optional)",
  },
  {
    icon: <Check size={16} className="text-green-500" />,
    text: "Free Concellation before 16:00, Jul 31st",
  },
  {
    icon: <Check size={16} className="text-green-500" />,
    text: "Instant Confirmation",
  },
  {
    icon: <Check size={16} className="text-green-500" />,
    text: "Prepay Online",
  },
];

const Rooms = () => {
  const { rooms } = useHotelDetailStore();
  console.log(rooms);

  // Track selected room ID and number of nights
  const [selectedRoomId, setSelectedRoomId] = useState(rooms?.[0]?.id ?? "");
  const [nights, setNights] = useState(1);

  // Find the selected room
  const selectedRoom = rooms.find((room) => room.id === selectedRoomId) || null;

  // Calculate Price Details
  const pricePerNight = selectedRoom
    ? Number(selectedRoom["price-per-night"])
    : 0;
  const taxRate = 0.1;
  const subtotal = Math.max(nights, 1) * pricePerNight;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  console.log(selectedRoom);

  return (
    <div className="">
      <div className="w-full flex flex-col md:flex-row gap-6">
        {/* Table Section */}
        <div className="overflow-x-auto flex-1">
          <table className="w-full border-collapse border border-gray-200">
            {/* Table Header */}
            <thead className="bg-gray-100 text-gray-700 text-sm md:text-base">
              <tr>
                <th className="p-3 text-left w-1/3">Room Type</th>
                <th className="p-3 text-center w-1/6">Guests</th>
                <th className="p-3 text-center w-1/6">Price</th>
                <th className="p-3 text-center w-1/6">Choice</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {rooms.map((room) => (
                <tr
                  key={room.id}
                  className={`border ${
                    selectedRoomId === room.id ? "bg-gray-100" : "bg-white"
                  }`}
                  onClick={() => setSelectedRoomId(room.id)}
                >
                  {/* Room Details */}
                  <td className="p-4">
                    <div className="flex flex-col gap-4">
                      <Image
                        src={
                          room.images?.trim() ||
                          "https://via.placeholder.com/300"
                        }
                        alt={room.name || "room Image"}
                        width={150}
                        height={80}
                        className="rounded-md"
                      />
                      <div>
                        <h1 className="text-primary font-semibold text-sm md:text-base">
                          {room.name}
                        </h1>
                        <div className="text-xs md:text-sm text-gray-600 space-y-1">
                          {room.amenities.split(", ").map((feature, i) => (
                            <p key={i} className="flex items-center gap-2">
                              {amenityIcons[
                                feature.toLowerCase() as keyof typeof amenityIcons
                              ] || (
                                <Check size={16} className="text-green-500" />
                              )}
                              {feature}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Guests */}
                  <td className="p-3 text-center">
                    <div className="flex justify-center gap-1">
                      {room.capacity > 3 ? (
                        <div className="flex items-center ">
                          <User size={20} className="text-gray-700" />

                          <sup className="text-gray-700 font-semibold text-[10px] font-sans">
                            X {room.capacity}
                          </sup>
                        </div>
                      ) : (
                        Array.from({ length: room.capacity || 1 }).map(
                          (_, i) => (
                            <User key={i} size={20} className="text-gray-700" />
                          )
                        )
                      )}
                    </div>
                  </td>

                  {/* Price */}
                  <td className="p-3 text-center font-medium text-gray-800">
                    ₦{room["price-per-night"].toLocaleString()}/night
                  </td>

                  {/* Choices */}
                  <td className="p-3 text-left">
                    <div className="flex flex-col gap-1">
                      {choices.map((choice, i) => (
                        <p
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          {choice.icon} {choice.text}
                        </p>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Price Details Section */}
        <div className="border border-gray-200 rounded-lg max-h-max shadow-md w-full max-w-[20rem] mx-auto">
          <h1 className="bg-gray-100 py-3 px-4 font-medium text-gray-800">
            Price Details
          </h1>

          <div className="p-4 space-y-3 text-gray-700">
            {/* Night Selection */}
            <div className="flex justify-between text-sm">
              <span>
                {nights} night(s) x ₦{pricePerNight.toLocaleString()}
              </span>
              <span className="font-medium">₦{subtotal.toLocaleString()}</span>
            </div>

            {/* Taxes */}
            <div className="flex justify-between text-sm">
              <span>Taxes & fees</span>
              <span className="font-medium">₦{tax.toLocaleString()}</span>
            </div>

            {/* Total */}
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span className="text-[#5627FF]">₦{total.toLocaleString()}</span>
            </div>

            {/* Button */}
            <button className="w-full bg-primary hover:bg-[#451ECC] transition-colors text-white font-medium py-2 rounded-md">
              Reserve Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
