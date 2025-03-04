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
import dets from "../../../public/dets2.jpg";
import Image from "next/image";

type PropertyType = {
  Name: string;
  Image: string;
};

const fetchPropertyTypes = async (): Promise<PropertyType[]> => {
  const response = await axios.get(
    "https://findpeace.onrender.com/api/v1/hotels/index"
  );
  return response.data.data.property_types;
};

export function BrowsePropertyCards() {
  const {
    data: properties,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["property_types"],
    queryFn: fetchPropertyTypes,
    staleTime: 60000,
  });

  if (isLoading)
    return (
      <p className="text-center text-gray-500">Loading property types...</p>
    );
  if (error)
    return (
      <p className="text-center text-red-500">Failed to load property types</p>
    );

  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        🏠 Browse by Property Type
      </h2>
      <Carousel className="relative">
        <CarouselContent className="flex gap-4">
          {properties.map((property, index) => (
            <CarouselItem
              key={index}
              className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={dets}
                  alt={property.Name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-3 bg-white rounded-b-xl shadow-md">
                  <p className="text-lg font-semibold text-gray-800 text-center">
                    {property.Name}
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
