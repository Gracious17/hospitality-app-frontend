import { useHotelDetailStore } from "@/lib/store/useBookingStore";

import React from "react";
import Image from "next/image";

const SimilarHotels = () => {
  const { similarHotels } = useHotelDetailStore();
  if (!similarHotels || similarHotels.length === 0) {
    return (
      <div>
        <p>No similar hotels found</p>
      </div>
    );
  }

  console.log(similarHotels);
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Similar Hotels</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {similarHotels.map((hotel) => {
          const imagesArray = hotel.images.split(",");

          return (
            <div
              key={hotel.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="relative w-full h-48">
                <Image
                  src={imagesArray[0]}
                  alt={hotel.name}
                  fill
                  objectFit="cover"
                  className="rounded-t-lg w-[100%] h-[80%]"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold">{hotel.name}</h3>
                <p className="text-gray-500">{hotel.city}</p>

                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-purple-500 text-white px-2 py-1 text-xs rounded">
                    {/* {hotel.rating} */}
                  </span>
                  <p className="text-sm text-gray-600">
                    {/* {hotel.reviews}  */}
                    Reviews
                  </p>
                </div>

                <div className="mt-3">
                  <p className="text-sm text-gray-500">Per Night</p>
                  <p className="text-lg font-bold">
                    {" "}
                    {hotel["price-per-night"]}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SimilarHotels;
