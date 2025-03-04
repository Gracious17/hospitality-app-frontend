"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import dets from "../../../public/dets2.jpg";

type Hotel = {
  id: string;
  name: string;
  city: string;
  rating: string;
  pricePerNight: number;
  images: string;
  reviews?: number;
};

const fetchPopularHotels = async (): Promise<Hotel[]> => {
  const response = await axios.get(
    "https://findpeace.onrender.com/api/v1/hotels/index"
  );
  return response.data.data.popular_hotels;
};

export function PopularHotels() {
  const {
    data: hotels,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["popular_hotels"],
    queryFn: fetchPopularHotels,
    staleTime: 60000,
  });

  if (isLoading)
    return <p className="text-center text-gray-500">Loading hotels...</p>;
  if (error)
    return <p className="text-center text-red-500">Failed to load hotels</p>;

  return (
    <div className="w-full max-w-6xl mx-auto py-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        🏨 Popular Hotels in Trending Destinations
      </h2>
      <Carousel className="relative">
        <CarouselContent className="flex gap-4">
          {hotels.map((hotel) => {
            // Extract first image from comma-separated images
            const firstImage = hotel.images.split(",")[0];

            // Determine rating color
            const ratingValue = parseFloat(hotel.rating ?? "0");
            let ratingClass = "bg-red-500"; // Default color
            if (ratingValue >= 4.5) ratingClass = "bg-blue-700";
            else if (ratingValue >= 3.5) ratingClass = "bg-yellow-500";

            return (
              <CarouselItem
                key={hotel.id}
                className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={dets}
                    alt={hotel.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="p-3 bg-white rounded-b-xl shadow-md">
                    <h3 className="text-lg font-semibold">{hotel.name}</h3>
                    <p className="text-sm text-gray-600">{hotel.city}</p>

                    <div className="flex items-center gap-2 mt-2">
                      <span
                        className={`text-xs font-semibold w-8 rounded-full text-center text-white ${ratingClass}`}
                      >
                        {hotel.rating}
                      </span>
                      {hotel.reviews && (
                        <p className="text-sm text-gray-500">
                          {hotel.reviews} reviews
                        </p>
                      )}
                    </div>

                    <div className="mt-3">
                      <p className="text-xs text-gray-500">Per Night</p>
                      <h2 className="text-lg font-bold text-gray-900">
                        ${hotel.pricePerNight}
                      </h2>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow" />
      </Carousel>
    </div>
  );
}
