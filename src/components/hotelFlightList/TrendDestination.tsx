"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type TrendingDestination = {
  City: string;
  Hotels: number;
};

const fetchTrendingDestinations = async (): Promise<TrendingDestination[]> => {
  const response = await axios.get(
    "https://findpeace.onrender.com/api/v1/hotels/index"
  );
  return response.data.data.trending_destinations;
};

const TrendDestination: React.FC = () => {
  const {
    data: destinations,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["trendingDestinations"],
    queryFn: fetchTrendingDestinations,
    staleTime: 60000,
  });

  if (isLoading)
    return <p className="text-center text-gray-500">Loading destinations...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">Failed to load destinations</p>
    );

  return (
    <div className="pt-12 pb-6 bg-white">
      <div className="w-[90%] mx-auto text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          ✈️ Trending Destinations
        </h1>
        <p className="text-gray-600 mt-1">Find hotels in popular cities</p>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md bg-white transition-transform hover:scale-105 cursor-pointer"
          >
            <h2 className="text-lg font-semibold text-gray-800 capitalize">
              {destination.City}
            </h2>
            <p className="text-gray-600 text-sm">
              {destination.Hotels} Hotels Available
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendDestination;
