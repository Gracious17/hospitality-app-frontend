import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import cityImg from "@/../public/city.png";
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
    city: "Lagos",
    hotels: "201 Hotels",
    img: "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    city: "Abuja",
    hotels: "201 Hotels",
    img: "https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    city: "Ikeja",
    hotels: "201 Hotels",
    img: "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    city: "Lekki",
    hotels: "201 Hotels",
    img: "https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    city: "Ibadan",
    hotels: "201 Hotels",
    img: "https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    city: "Benin City",
    hotels: "201 Hotels",
    img: "https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    city: "Benin City",
    hotels: "201 Hotels",
    img: "https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// will be replced with actual data

export function TrendyHotelCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto py-4">
      <h2 className="text-lg font-semibold mb-4">
        Explore Hotel in Trending Destinations
      </h2>
      <Carousel className="relative " opts={emblaOptions}>
        <CarouselContent className="flex space-x-1">
          {destinations.map((dest, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/6 w-[150px]"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={dest.img}
                  alt={dest.city}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                {/* overlay */}
                <div className="absolute z-0  inset-0 bottom-0 left-0 right-0 h-full bg-gradient-to-b from-transparent to-black/40" />
                <div className="font-serif tracking-wide p-2 mt-20 bg-transparent text-center absolute bottom-0 left-0 right-0  inset-0 flex flex-col justify-center items-center z-10 ">
                  <h3 className="text-lg font-medium text-white">
                    {dest.city}
                  </h3>
                  <p className="text-xs text-white"> {dest.hotels}</p>
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
