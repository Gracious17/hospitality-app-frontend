import Image from "next/image";
import React, { useState } from "react";
import hotelImage from "../../../public/pixasquare-4ojhpgKpS68-unsplash.jpg";
import { AirVent, Ban, Car, Waves, Wifi, User, Check } from "lucide-react";

// Define the Room type
type Room = {
  name: string;
  image: string;
  guests: number;
  price: number;
  features: { icon: JSX.Element; text: string }[];
};

// Room data
const rooms: Room[] = [
  {
    name: "Family Suite with Two Queen Beds",
    image: hotelImage,
    guests: 3,
    price: 133689,
    features: [
      { icon: <Car size={18} />, text: "2 Queen bed and Double bed" },
      { icon: <Ban size={18} />, text: "No Smoking" },
      { icon: <Waves size={18} />, text: "30m²" },
      { icon: <AirVent size={18} />, text: "Air Conditioning" },
      { icon: <Wifi size={18} />, text: "Free Wifi" },
    ],
  },
  ...Array(4).fill({
    name: "Deluxe King Room",
    image: hotelImage,
    guests: 2,
    price: 200689,
    features: [
      { icon: <Car size={18} />, text: "King-size bed" },
      { icon: <Ban size={18} />, text: "No Smoking" },
      { icon: <Waves size={18} />, text: "35m²" },
      { icon: <AirVent size={18} />, text: "Air Conditioning" },
      { icon: <Wifi size={18} />, text: "Free Wifi" },
    ],
  }),
];

// Choices Data
const choices = [
  {
    icon: <Check size={16} className="text-green-500" />,
    text: "Breakfast for $13.99 (optional)",
  },
  {
    icon: <Check size={16} className="text-green-500" />,
    text: "Free Cancellation before 16:00, Jul 31st",
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

const Rooms: React.FC = () => {
  const [selectedRooms, setSelectedRooms] = useState(1);
  const [nights, setNights] = useState(1);
  const pricePerNight = rooms[0].price;
  const taxRate = 0.1;

  const subtotal = selectedRooms * nights * pricePerNight;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="">
      <div className="w-full flex flex-col md:flex-row gap-6">
        {/* Table Section */}

        <div className="overflow-x-auto flex-1">
          <table className="w-full border-collapse border border-gray-200">
            {/* Table Header */}
            <thead className="bg-gray-100 text-gray-700 text-sm md:text-base">
              <tr>
                <th className="p-3 text-left w-1/3 ">Room Type</th>
                <th className="p-3 text-center w-1/6 ">Guests</th>
                <th className="p-3 text-center w-1/6 ">Price</th>
                <th className="p-3 text-center w-1/6 ">Choice</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {rooms.map((room, index) => (
                <tr key={index} className="border">
                  {/* Room Details */}
                  <td className="p-4">
                    <div className="flex flex-col gap-4">
                      <Image
                        src={room.image}
                        alt="Hotel Image"
                        width={150}
                        height={80}
                        className="rounded-md"
                      />
                      <div>
                        <h1 className="text-primary font-semibold text-sm md:text-base">
                          {room.name}
                        </h1>
                        <div className="text-xs md:text-sm text-gray-600 space-y-1">
                          {room.features.map((feature, i) => (
                            <p key={i} className="flex items-center gap-2">
                              {feature.icon}
                              {feature.text}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Guests */}
                  <td className="p-3 text-center">
                    <div className="flex justify-center gap-1">
                      {Array.from({ length: room.guests }).map((_, i) => (
                        <User key={i} size={20} className="text-gray-700" />
                      ))}
                    </div>
                  </td>

                  {/* Price */}
                  <td className="p-3 text-center font-medium text-gray-800">
                    ₦{room.price.toLocaleString()}/night
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
          {/* Header */}
          <h1 className="bg-gray-100 py-3 px-4 font-medium text-gray-800">
            Price Details
          </h1>

          {/* Content */}
          <div className="p-4 space-y-3 text-gray-700">
            {/* Room Selection */}

            {/* Night Selection */}

            {/* Price Breakdown */}
            <div className="flex justify-between text-sm">
              <span>2 rooms x 1 night</span>
              <span className="font-medium">${pricePerNight}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Taxes & fees</span>
              <span className="font-medium">${tax.toFixed(2)}</span>
            </div>

            {/* Total */}
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span className="text-[#5627FF]">${total.toFixed(2)}</span>
            </div>

            {/* Button */}
            <button className="w-full bg-primary hover:bg-[#451ECC] transition-colors text-white font-medium py-2 rounded-md">
              Reserve Room
            </button>
          </div>
        </div>
      </div>

      <section className="mt-8 space-y-4">
        <h1 className="text-lg font-medium mb-6 ">Guest Reviews</h1>
        <div className="flex flex-col md:flex-row md:gap-6 justify-between">
          <div className="flex gap-3">
            <div className="flex items-center bg-[#5627FF] text-white w-8 h-8 rounded-full justify-center mb-2">
              <h1 className="">8.1</h1>
            </div>

            <p>Very Good</p>
            <p className="">58 Reviews</p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
            <div className="flex items-center justify-between w-full text-sm">
              <span>Cleanliness</span>
              <span>4.5</span>
            </div>
            <div className="flex items-center justify-between w-full text-sm">
              <span>Amenities</span>
              <span>4.5</span>
            </div>

            <div className="w-full h-2 bg-purple-100 rounded-full relative">
              <div className="h-full bg-primary rounded-full w-[50%]"></div>
            </div>
            <div className="w-full h-2 bg-purple-100 rounded-full relative">
              <div className="h-full bg-primary rounded-full w-[50%]"></div>
            </div>

            <div className="flex items-center justify-between w-full text-sm">
              <span>Location</span>
              <span>4.5</span>
            </div>
            <div className="flex items-center justify-between w-full text-sm">
              <span>Staff & Services</span>
              <span>4.5</span>
            </div>

            <div className="w-full h-2 bg-purple-100 rounded-full relative">
              <div className="h-full bg-primary rounded-full w-[50%]"></div>
            </div>
            <div className="w-full h-2 bg-purple-100 rounded-full relative">
              <div className="h-full bg-primary rounded-full w-[50%]"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
