import React from "react";
import Image from "next/image";

interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  image: string;
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: "Joygate Hotel & Suite",
    location: "Oshodi-Isolo",
    rating: 8.1,
    reviews: 93,
    price: "₦75,000",
    image: "/dets2.jpg", // Update with actual image path
  },
  {
    id: 2,
    name: "Joygate Hotel & Suite",
    location: "Oshodi-Isolo",
    rating: 8.1,
    reviews: 93,
    price: "₦75,000",
    image: "/dets2.jpg",
  },
  {
    id: 3,
    name: "Joygate Hotel & Suite",
    location: "Oshodi-Isolo",
    rating: 8.1,
    reviews: 93,
    price: "₦75,000",
    image: "/dets2.png",
  },
  {
    id: 4,
    name: "Joygate Hotel & Suite",
    location: "Oshodi-Isolo",
    rating: 8.1,
    reviews: 93,
    price: "₦75,000",
    image: "/dets2.png",
  },
];

const SimilarHotels: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Similar Hotels</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative w-full h-48">
              <Image
                src={hotel.image}
                alt={hotel.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{hotel.name}</h3>
              <p className="text-gray-500">{hotel.location}</p>

              <div className="flex items-center gap-2 mt-2">
                <span className="bg-purple-500 text-white px-2 py-1 text-xs rounded">
                  {hotel.rating}
                </span>
                <p className="text-sm text-gray-600">{hotel.reviews} Reviews</p>
              </div>

              <div className="mt-3">
                <p className="text-sm text-gray-500">Per Night</p>
                <p className="text-lg font-bold">{hotel.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarHotels;
