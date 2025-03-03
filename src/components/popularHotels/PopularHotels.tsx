"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import det from "../../../public/dets2.jpg";

type Hotel = {
  id: string;
  name: string;
  city: string;
  rating: string;
  pricePerNight: number;
  images: string[];
  reviews?: number;
};

const fetchPopularHotels = async (): Promise<Hotel[]> => {
  try {
    const response = await axios.get(
      "https://findpeace.onrender.com/api/v1/hotels/index"
    );

    if (!response.data?.data?.popular_hotels) {
      console.error("Invalid API response:", response.data);
      return [];
    }

    return response.data.data.popular_hotels.map((hotel: any) => ({
      id: hotel.id || crypto.randomUUID(),
      name: hotel.name || "Unknown Hotel",
      city: hotel.city || "Unknown City",
      rating: hotel.rating || "0",
      pricePerNight: hotel["price-per-night"] ?? 0,
      // images: hotel.images ? hotel.images.split(",") : ["/default-hotel.jpg"],
      reviews: hotel.reviews ?? 0,
    }));
  } catch (error) {
    console.error("Failed to fetch hotels:", error);
    return [];
  }
};

export function PopularHotels() {
  const {
    data: hotels = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["popularHotels"],
    queryFn: fetchPopularHotels,
    staleTime: 60000,
    retry: false,
  });

  console.log("Hotels:", hotels);
  console.log("Loading:", isLoading);
  console.log("Error:", error);

  if (isLoading)
    return <p className="text-center text-gray-500">Loading hotels...</p>;
  if (error)
    return <p className="text-center text-red-500">Failed to load hotels</p>;

  return (
    <div className="w-full max-w-6xl mx-auto py-6">
      <h2 className="text-xl font-semibold mb-5 text-gray-900 text-center">
        ⭐ Popular Hotels in Trending Destinations
      </h2>

      <Carousel
        className="relative"
        opts={{ align: "start", loop: true, slidesToScroll: 1 }}
      >
        <CarouselContent className="flex gap-4">
          {hotels.map((hotel) => {
            const ratingValue = parseFloat(hotel.rating ?? "0");

            let ratingClass = "bg-red-500";
            if (ratingValue >= 4.5) ratingClass = "bg-green-600";
            else if (ratingValue >= 3.5) ratingClass = "bg-yellow-500";
            else if (ratingValue >= 2.5) ratingClass = "bg-orange-500";

            return (
              <CarouselItem
                key={hotel.id}
                className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 w-[220px]"
              >
                <div className="overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105 bg-white">
                  <Image
                    src={det}
                    alt={hotel.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                    onError={(e) =>
                      (e.currentTarget.src = "/default-hotel.jpg")
                    }
                  />

                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      {hotel.name}
                    </h3>
                    <p className="text-sm text-gray-500">{hotel.city}</p>

                    <div className="flex items-center mt-2">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full text-white ${ratingClass}`}
                      >
                        {hotel.rating} ⭐
                      </span>
                      <p className="text-sm text-gray-600 ml-2">
                        {hotel.reviews > 0
                          ? `${hotel.reviews} Reviews`
                          : "No reviews yet"}
                      </p>
                    </div>

                    <div className="mt-3">
                      <p className="text-xs text-gray-500">Per Night</p>
                      <h2 className="text-lg font-semibold text-black">
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
