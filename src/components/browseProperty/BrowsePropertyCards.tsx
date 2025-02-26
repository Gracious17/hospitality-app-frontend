import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import { ArrowLeft, ArrowRight } from "lucide-react";
import cityImg from "../../../public/city.png";
// import Image from "next/image";
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
  { id: 1, city: "Lagos", hotels: "201 Hotels", img: `${cityImg}` },
  { id: 2, city: "Abuja", hotels: "201 Hotels", img: `${cityImg}` },
  { id: 3, city: "Ikeja", hotels: "201 Hotels", img: `${cityImg}` },
  { id: 4, city: "Lekki", hotels: "201 Hotels", img: `${cityImg}` },
  { id: 5, city: "Ibadan", hotels: "201 Hotels", img: `${cityImg}` },
  {
    id: 6,
    city: "Benin City",
    hotels: "201 Hotels",
    img: "../../public/city.png",
  },
];

export function BrowsePropertyCards() {
  // <Carousel
  //   className="w-full max-w-6xl mx-auto pb-4 overflow-hidden"
  //   opts={emblaOptions}
  // >
  //   <CarouselContent className="flex">
  //     {destinations.map((dest) => (
  //       <CarouselItem
  //         key={dest.id}
  //         className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
  //       >
  //         {/* <div className="bg-gray-200 p-6 flex flex-col items-center justify-center rounded-lg shadow">
  //           <h2 className="text-lg font-semibold">{dest.city}</h2>
  //           <p className="text-sm text-gray-600">{dest.hotels}</p>
  //         </div> */}

  //         <div className="overflow-hidden rounded-xl shadow-lg">
  //           {/* <Image
  //             src={dest.img}
  //             alt={dest.city}
  //             width={300}
  //             height={200}
  //             className="w-full h-48 object-cover"
  //           /> */}
  //           <div className="p-3 bg-white">
  //             <h3 className="text-md font-medium">{dest.city}</h3>
  //             <p className="text-sm text-gray-500">{dest.hotels}</p>
  //           </div>
  //         </div>
  //       </CarouselItem>
  //     ))}
  //   </CarouselContent>

  //   {/* Navigation buttons */}
  //   <CarouselPrevious className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 text-white ">
  //     <ArrowLeft size={24} />
  //   </CarouselPrevious>
  //   <CarouselNext className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 text-white">
  //     <ArrowRight size={24} />
  //   </CarouselNext>
  // </Carousel>

  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <h2 className="text-lg font-semibold mb-4 font-sans">
        Browse by property type
      </h2>
      <Carousel className="relative" opts={emblaOptions}>
        <CarouselContent className="flex gap-4">
          {destinations.map((dest, index) => (
            <CarouselItem
              key={index}
              className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4" // Controls responsive sizing
            >
              <div className="overflow-hidden rounded-xl shadow-lg">
                {/* <Image
                    src={dest.img}
                    alt={dest.city}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  /> */}
                <div className="p-12 bg-white text-center">
                  <h3 className="text-md font-medium">{dest.city}</h3>
                  <p className="text-sm text-gray-500">{dest.hotels}</p>
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
