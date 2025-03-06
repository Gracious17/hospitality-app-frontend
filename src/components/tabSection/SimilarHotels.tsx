import React from "react";
import Image from "next/image";

type Hotel = {
  id: string;
  name: string;
  city: string;
  "average-rating": number;
  reviews: number;
  "price-per-night": number;
  images: string;
};

type Props = {
  hotel: Hotel;
};

const SimilarHotels = ({ hotel }: Props) => {
  const {
    name,
    city,
    reviews,
    ["average-rating"]: averageRating,
    ["price-per-night"]: pricePerNight,
    images,
  } = hotel;
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Similar Hotels</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <div className="relative w-full h-48">
            <Image
              src={images.split(",")[0]}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-500">{city}</p>

            <div className="flex items-center gap-2 mt-2">
              <span className="bg-purple-500 text-white px-2 py-1 text-xs rounded">
                {averageRating}
              </span>
              <p className="text-sm text-gray-600">{reviews} Reviews</p>
            </div>

            <div className="mt-3">
              <p className="text-sm text-gray-500">Per Night</p>
              <p className="text-lg font-bold">{pricePerNight}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarHotels;
