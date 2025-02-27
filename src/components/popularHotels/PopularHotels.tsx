import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
type EmblaOptions = {
  align?: "start" | "center" | "end";
  loop?: boolean;
  slidesToScroll?: number;
  draggable?: boolean;
  speed?: number;
};

const emblaOptions: EmblaOptions = {
  align: "start",
  loop: true,
  slidesToScroll: 1,
};

// will be replced with actual data

const destinations = [
  {
    id: 1,
    city: "Oshodi Isolo",
    rating: "4.5",
    amount: "₦ 75,000",
    reviews: "58 reviews",
    hotels: "Joygate Hotel & Suit",
    img: "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    city: "Oshodi Isolo",
    rating: "2.5",
    amount: "₦ 75,000",
    reviews: "58 reviews",
    hotels: "Eko Hotel & Suites",
    img: "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    city: "Oshodi Isolo",
    rating: "4.5",
    amount: "₦ 75,000",
    reviews: "58 reviews",
    hotels: "Lagos Continental Hotel",
    img: "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    city: "Oshodi Isolo",
    reviews: "58 reviews",
    rating: "5.5",
    amount: "₦ 75,000",
    hotels: "Golden Tulip Hotel",
    img: "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    city: "Ibadan",
    rating: "2.5",
    amount: "₦ 75,000",
    reviews: "58 reviews",
    hotels: "201 Hotels",
    img: "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    city: "Benin City",
    rating: "3.5",
    amount: "₦ 75,000",
    reviews: "58 reviews",
    hotels: "201 Hotels",
    img: "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export function PopularHotels() {
  return (
    <div className="w-full max-w-6xl mx-auto py-4">
      <h2 className="text-lg font-semibold mb-4 font-sans">
        Popular Hotels In Trending Destinations
      </h2>
      <Carousel className="relative" opts={emblaOptions}>
        <CarouselContent className="flex gap-4">
          {destinations.map((dest, index) => {
            const ratingValue = parseFloat(dest.rating ?? "0");

            let ratingClass = "bg-blue-500";
            if (ratingValue >= 4.5) {
              ratingClass = "bg-blue-700";
            } else if (ratingValue >= 3.5) {
              ratingClass = "bg-yellow-500";
            } else if (ratingValue >= 5.8) {
              ratingClass = "bg-blue-500";
            } else {
              ratingClass = "bg-red-500";
            }

            return (
              <CarouselItem
                key={index}
                className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 w-[200px]"
              >
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={dest.img}
                    alt={dest.city}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className=" bg-white text-left pl-2 shadow-lg  shadow-black/80 ">
                    <h3 className="text-lg font-bold mt-2 ">{dest.hotels}</h3>
                    <p className="text-sm text-gray-700 pb-2">{dest.city}</p>
                    {/* rating and reviews container */}
                    <div className="flex items-center gap-2 ">
                      <p
                        className={`text-xs font-semibold w-8 rounded-3xl text-center text-white  ${ratingClass}`}
                      >
                        {dest.rating}
                      </p>
                      <p className="text-sm  text-gray-600">{dest.reviews}</p>
                    </div>
                    {/* prices container */}
                    <div className="flex flex-col pt-5">
                      <p className="text-xs">Per Night</p>
                      <h2 className="text-black font-medium ">{dest.amount}</h2>
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
