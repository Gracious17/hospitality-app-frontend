"use client";
import React from "react";
import Image from "next/image";
import { useHotelStore } from "@/lib/store/useBookingStore";
import { MapPin } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import RatingDropDown from "./RatingDropDown";
import FilterDropdown from "./FilterDropDown";
import { useRouter } from "next/navigation";
import LoadingSpinner from "../loaders/LoadingSpinner";
// const hotelsListingData = [
//   {
//     id: 1,
//     name: "Lagos Oriental Hotel",
//     location: "Victoria Island",
//     distance: "11.5km to city center",
//     price: "₦133,689",
//     image:
//       "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
//     amenities: ["🚭 No Smoking", "🅿 Parking", "🏊‍♂️ Swimming Pool"],
//   },
//   {
//     id: 2,
//     name: "Lagos Oriental Hotel",
//     location: "Victoria Island",
//     distance: "11.5km to city center",
//     price: "₦133,689",
//     image:
//       "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
//     amenities: ["🚭 No Smoking", "🅿 Parking", "🏊‍♂️ Swimming Pool"],
//   },
//   {
//     id: 3,
//     name: "Lagos Oriental Hotel",
//     location: "Victoria Island",
//     distance: "11.5km to city center",
//     price: "₦133,689",
//     image:
//       "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
//     amenities: ["🚭 No Smoking", "🅿 Parking", "🏊‍♂️ Swimming Pool"],
//   },
//   {
//     id: 4,
//     name: "Lagos Oriental Hotel",
//     location: "Victoria Island",
//     distance: "11.5km to city center",
//     price: "₦133,689",
//     image:
//       "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
//     amenities: ["🚭 No Smoking", "🅿 Parking", "🏊‍♂️ Swimming Pool"],
//   },
//   {
//     id: 5,
//     name: "Lagos Oriental Hotel",
//     location: "Victoria Island",
//     distance: "11.5km to city center",
//     price: "₦133,689",
//     image:
//       "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
//     amenities: ["🚭 No Smoking", "🅿 Parking", "🏊‍♂️ Swimming Pool"],
//   },
//   {
//     id: 6,
//     name: "Lagos Oriental Hotel",
//     location: "Victoria Island",
//     distance: "11.5km to city center",
//     price: "₦133,689",
//     image:
//       "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
//     amenities: ["🚭 No Smoking", "🅿 Parking", "🏊‍♂️ Swimming Pool"],
//   },
// ];

interface HotelListingProps {
  location: string;
}

// const HotelListing: React.FC<HotelListingProps> = ({ location }) => {

const HotelListing: React.FC<HotelListingProps> = ({ location }) => {
  const { hotels, loading, error } = useHotelStore();
  const router = useRouter();
  if (loading)
    return (
      <div className="items-center text-center justify-center w-full mx-auto">
        <LoadingSpinner />
      </div>
    );
  if (error)
    return <p className="text-red-500  animate-bounce font-mono">{error}</p>;
  if (!Array.isArray(hotels) || hotels.length === 0) {
    return <p className="text-gray-500">No hotels found in this location.</p>;
  }
  console.log(hotels);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 ">
        {/* Left container  section) */}
        <div className="w-1/3   md:flex md:flex-col hidden sm:flex lg:flex gap-4 ">
          <div>
            <div className="lg:w-1/3 h-[300px] md:h-[350px] bg-gray-100 rounded-xl flex items-center justify-center shadow-lg">
              <button className="w-4/5 md:w-3/4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                Show On Map
              </button>
            </div>
          </div>
          {/* slider */}
          <div className="py-8 px-8 rounded-md bg-white shadow-md text-left">
            <p className="text-sm text-left font-semibold">price</p>
            <hr />
            <div>
              <div className="flex justify-between pb-2 space-x-20 items-center text-center ">
                <span className="text-gray-500  ">#133,689</span>
                <span className="text-gray-500 ml-9">#133,689</span>
              </div>
              <Slider defaultValue={[33]} max={1000} step={1} />
            </div>
          </div>
          {/* rating dropdown */}
          <div className="py-8 px-8 rounded-md bg-white shadow-md text-left">
            <p className="text-sm text-left font-semibold">Star</p>
            <hr />
            <div>
              <div className="flex  pb-2 space-x-20 items-center text-center "></div>
              <RatingDropDown />
            </div>
          </div>
          <FilterDropdown />
        </div>

        {/* Right section  containers */}
        <div className="flex flex-col sm:w-full gap-4 md:w-full w-full">
          <div className="h-20 ">
            {hotels.length} hotels found in {location}
            <div className="">
              <input type="text" placeholder="filter" />
              <input type="text" placeholder="filter" />
              <input type="text" placeholder="filter" />
            </div>
          </div>
          {hotels.length > 0 ? (
            <div className=" bg-gray-200 space-y-2">
              {hotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="bg-white rounded-lg shadow p-4 flex flex-col  lg:flex-row  sm:flex-row md:flex-row gap-4"
                >
                  <Image
                    src={hotel.images[0]}
                    alt={hotel.name}
                    width={200}
                    height={200}
                    className=" md:w-20 h-40 lg:w-40 lg:h-40 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{hotel.name}⭐</h3>
                    <div className="text-sm flex pt-2 mb-2">
                      <span className="text-white  bg-blue-500 text-center h-5 items-center text-sm px-2 rounded-full mr-1">
                        {hotel.rating}
                      </span>
                      very good . {hotel.reviews} reviews
                    </div>
                    <div className="flex space-x-1 mb-1">
                      <span className="text-blue-500">
                        <MapPin size={15} />
                      </span>
                      <p className="text-xs text-black font-semibold">
                        {hotel.city}
                      </p>
                    </div>
                    <p className="text-sm">
                      {hotel.address} ({hotel.state})
                    </p>
                    <div className="flex gap-2 text-xs ">
                      <p className="text-gray-500">
                        {hotel.amenities.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className="text-right space-y-2 border-l-2 pl-4 mt-4">
                    <p className="text-xl font-bold text-[#5627FF] ">
                      ₦{hotel.pricePerNight}
                    </p>
                    <p className="text-xs">per Night</p>
                    <button
                      onClick={() => router.push(`/hotel-details/${hotel.id}`)}
                      className=" text-white px-4 text-sm py-2 rounded bg-[#5627FF]"
                    >
                      Check Availability
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <p className="text-gray-500">No hotels found in this location.</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

// &&&*****
//   return (
//     <div>
//       <h2 className="text-lg font-semibold mb-3">
//         {hotels.length} hotels found in {location}
//       </h2>
//       <p>{location ? `Hotels in ${location}` : "All Hotels"}</p>

//       {hotels.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {hotelsListingData.map((hotel) => (
//             <div key={hotel.id} className="border rounded-lg p-3 shadow">
//               {/* Display first image */}
//               <Image
//                 src={hotel.images[0]}
//                 alt={hotel.name}
//                 width={300}
//                 height={200}
//                 className="w-full h-40 object-cover rounded-md"
//               />
//               <h3 className="text-lg font-bold mt-2">{hotel.name}</h3>
//               <p className="text-gray-600">
//                 {hotel.city}, {hotel.state}
//               </p>
//               <p className="text-gray-800">{hotel.propertyType}</p>
//               <p className="text-gray-800 font-semibold">
//                 ${hotel.pricePerNight} per night
//               </p>
//               <p className="text-yellow-500">
//                 ⭐ {hotel.rating} ({hotel.reviews} reviews)
//               </p>
//               <p className="text-gray-500">{hotel.amenities.join(", ")}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-500">No hotels found in this location.</p>
//       )}
//     </div>
//   );
// };

export default HotelListing;
