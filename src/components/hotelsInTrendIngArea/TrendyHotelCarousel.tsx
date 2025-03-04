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

type TrendingDestination = {
  City: string;
  Hotels: number;
};

const fetchTrendingDestinations = async (): Promise<TrendingDestination[]> => {
  const response = await axios.get(
    "https://findpeace.onrender.com/api/v1/hotels/index"
  ); // Replace with actual API
  return response.data.data.trending_destinations;
};

export function TrendyHotelCarousel() {
  const {
    data: destinations,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["trending_destinations"],
    queryFn: fetchTrendingDestinations,
    staleTime: 60000,
  });

  if (isLoading)
    return (
      <p className="text-center text-gray-500">
        Loading trending destinations...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-red-500">
        Failed to load trending destinations
      </p>
    );

  return (
    <div className="w-full max-w-6xl mx-auto py-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        🌍 Explore Hotels in Trending Destinations
      </h2>
      <Carousel className="relative">
        <CarouselContent className="flex space-x-1">
          {destinations.map((dest, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/6 w-[150px]"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={dets}
                  alt={dest.City}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bottom-0 left-0 right-0 h-full bg-gradient-to-b from-transparent to-black/40" />
                <div className="p-2 mt-20 bg-transparent text-center absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center z-10">
                  <h3 className="text-lg font-medium text-white">
                    {dest.City}
                  </h3>
                  <p className="text-sm text-white font-semibold">
                    {dest.Hotels} Hotels
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow" />
      </Carousel>
    </div>
  );
}
