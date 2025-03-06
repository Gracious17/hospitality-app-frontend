// "use client";

// import { useState } from "react";
// import Image from "next/image";

// // Define TypeScript types
// interface Hotel {
//   id: string;
//   name: string;
//   city: string;
//   address: string;
//   rating: string;
//   amenities: string;
//   images: string;
//   description: string;
// }

// interface Room {
//   id: string;
//   name: string;
//   type: string;
//   images: string;
//   amenities: string;
//   capacity: number;
//   "allow-smoking": boolean;
//   "room-size": string;
//   "price-per-night": number;
// }

// interface SimilarHotel {
//   id: string;
//   name: string;
//   city: string;
//   "price-per-night": number;
//   images: string;
// }

// interface Review {
//   user: string;
//   comment: string;
//   rating: number;
// }

// interface HotelData {
//   hotel: Hotel;
//   policies: string | null;
//   reviews: Review[] | null;
//   rooms: Room[];
//   similar: SimilarHotel[];
// }

// // Lightbox component for full-screen image gallery
// const Lightbox = ({
//   images,
//   onClose,
// }: {
//   images: string[];
//   onClose: () => void;
// }) => (
//   <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//     <div className="relative bg-white p-4 rounded-lg max-w-4xl w-full">
//       <button
//         className="absolute top-2 right-2 text-black text-3xl"
//         onClick={onClose}
//       >
//         &times;
//       </button>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//         {images.map((img, index) => (
//           <Image
//             key={index}
//             src={img}
//             alt={`Hotel Image ${index}`}
//             width={400}
//             height={250}
//             className="rounded-lg"
//           />
//         ))}
//       </div>
//     </div>
//   </div>
// );

// // Hotel image gallery with a clickable "More Photos" preview
// const HotelGallery = ({ images }: { images: string[] }) => {
//   const [showLightbox, setShowLightbox] = useState(false);

//   return (
//     <div className="mt-4">
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//         {images.slice(0, 4).map((img, index) => (
//           <Image
//             key={index}
//             src={img}
//             alt={`Hotel Image ${index}`}
//             width={300}
//             height={200}
//             className="rounded-lg"
//           />
//         ))}

//         {images.length > 4 && (
//           <div
//             className="relative cursor-pointer"
//             onClick={() => setShowLightbox(true)}
//           >
//             <Image
//               src={images[4]}
//               alt="More Images"
//               width={300}
//               height={200}
//               className="rounded-lg"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold">
//               +{images.length - 4} photos
//             </div>
//           </div>
//         )}
//       </div>

//       {showLightbox && (
//         <Lightbox images={images} onClose={() => setShowLightbox(false)} />
//       )}
//     </div>
//   );
// };

// export default function HotelDetails({ hotelData }: { hotelData: HotelData }) {
//   const { hotel, policies, reviews, rooms, similar } = hotelData;
//   const images = hotel.images.split(",");

//   return (
//     <div className="container mx-auto p-6">
//       {/* Hotel Details */}
//       <h1 className="text-3xl font-bold">{hotel.name}</h1>
//       <p className="text-gray-600">
//         {hotel.address}, {hotel.city}
//       </p>
//       <p className="text-lg text-gray-800 mt-2">{hotel.description}</p>

//       {/* Image Gallery */}
//       <HotelGallery images={images} />

//       {/* Amenities */}
//       <div className="mt-4">
//         <h2 className="text-xl font-semibold">Amenities</h2>
//         <p className="text-gray-600">{hotel.amenities}</p>
//       </div>

//       {/* Rooms */}
//       {rooms.length > 0 && (
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold">Available Rooms</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
//             {rooms.map((room) => (
//               <div key={room.id} className="border p-4 rounded-lg">
//                 <h3 className="text-lg font-bold">
//                   {room.name} ({room.type})
//                 </h3>
//                 <p className="text-gray-600">
//                   Capacity: {room.capacity} guests
//                 </p>
//                 <p className="text-gray-600">Room Size: {room["room-size"]}</p>
//                 <p className="text-gray-600">
//                   Smoking Allowed: {room["allow-smoking"] ? "Yes" : "No"}
//                 </p>
//                 <p className="text-gray-600">
//                   Price per Night: ${room["price-per-night"]}
//                 </p>
//                 <Image
//                   src={room.images}
//                   alt={room.name}
//                   width={300}
//                   height={200}
//                   className="rounded-lg mt-2"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Hotel Policies */}
//       {/* {policies && (
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold">Hotel Policies</h2>
//           <p className="text-gray-600">{policies}</p>
//         </div>
//       )} */}
//       {/* Hotel Policies */}
//       {policies && typeof policies === "object" && (
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold">Hotel Policies</h2>
//           <ul className="list-disc list-inside text-gray-600">
//             <li>
//               <strong>Check-in:</strong> {policies["check-in"]}
//             </li>
//             <li>
//               <strong>Check-out:</strong> {policies["check-out"]}
//             </li>
//             <li>
//               <strong>Children Allowed:</strong>{" "}
//               {policies["allow-children"] ? "Yes" : "No"}
//             </li>
//             <li>
//               <strong>Pets Allowed:</strong>{" "}
//               {policies["allow-pets"] ? "Yes" : "No"}
//             </li>
//             <li>
//               <strong>Payments Accepted:</strong>{" "}
//               {Array.isArray(policies["payments-available"])
//                 ? (policies["payments-available"] as string[]).join(", ")
//                 : "N/A"}
//             </li>
//           </ul>
//         </div>
//       )}

//       {/* Reviews */}
//       {reviews && reviews.length > 0 ? (
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold">Reviews</h2>
//           {reviews.map((review, index) => (
//             <div key={index} className="border p-2 rounded-lg my-2">
//               <p className="text-gray-700">
//                 <strong>{review.user}</strong>: {review.comment}
//               </p>
//               <p className="text-yellow-500">⭐ {review.rating}/5</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="mt-4 text-gray-500">No reviews available.</p>
//       )}

//       {/* Similar Hotels */}
//       {similar.length > 0 && (
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold">Similar Hotels</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
//             {similar.map((hotel) => {
//               const similarImages = hotel.images.split(",");
//               return (
//                 <div key={hotel.id} className="border p-4 rounded-lg">
//                   <h3 className="text-lg font-bold">{hotel.name}</h3>
//                   <p className="text-gray-600">City: {hotel.city}</p>
//                   <p className="text-gray-600">
//                     Price per Night: ${hotel["price-per-night"]}
//                   </p>
//                   <Image
//                     src={similarImages[0]}
//                     alt={hotel.name}
//                     width={300}
//                     height={200}
//                     className="rounded-lg mt-2"
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// *****

//  work here
"use client";
import React from "react";
import { Ban, MapPin, ParkingCircle, Waves, Wifi } from "lucide-react";

import TabSection from "@/components/tabSection/tabSection";
import Image from "next/image";
import GuestReviews from "@/components/tabSection/GuestR";
import GuestPolicies from "@/components/tabSection/GuestPolicies";
import ImportantInfo from "@/components/tabSection/ImportantInfo";
import SimilarHotels from "@/components/tabSection/SimilarHotels";
// import { useState } from "react";

type HotelProps = {
  hotelData: {
    hotel: {
      id: string;
      name: string;
      city: string;
      address: string;
      rating: string;
      amenities: string;
      images: string;
      description: string;
    };
    policies: {
      "check-in": string;
      "check-out": string;
      "allow-children": boolean;
      "allow-pets": boolean;
      "payments-available": string[];
    } | null;
    reviews: { user: string; comment: string; rating: number }[] | null;
    rooms: {
      id: string;
      name: string;
      type: string;
      images: string;
      amenities: string;
      capacity: number;
      "allow-smoking": boolean;
      "room-size": string;
      "price-per-night": number;
    }[];

    similar: {
      id: string;
      name: string;
      city: string;
      reviews: number;
      "average-rating": number;
      "price-per-night": number;
      images: string;
    }[];
  };
};
export default function HotelDetails({ hotelData }: HotelProps) {
  const { hotel, policies, reviews, rooms, similar } = hotelData;
  const imagesArray = hotel.images.split(",");
  console.log(hotelData);

  // const facilities = [
  //   { name: "No Smoking", icon: <Ban className="text-blue-600 w-5 h-5" /> },
  //   {
  //     name: "Parking",
  //     icon: <ParkingCircle className="text-blue-600 w-5 h-5" />,
  //   },
  //   {
  //     name: "Swimming Pool",
  //     icon: <Waves className="text-blue-600 w-5 h-5" />,
  //   },
  //   { name: "Free WiFi", icon: <Wifi className="text-blue-600 w-5 h-5" /> },
  // ];

  //  const images = [
  //    "pixasquare-4ojhpgKpS68-unsplash.jpg",
  //    "dets2.jpg",
  //    "dets1.png",
  //    "dets2.jpg",
  //    "dets2.jpg",
  //    "dets1.png",
  //  ];
  return (
    <div className="flex flex-col gap-8 px-4 md:px-8 lg:px-16 py-8">
      {/* Header Section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            {hotel.name}
          </h1>
          <div className="flex gap-1 text-yellow-500 text-lg">
            {[...Array(4)].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="text-blue-600" size={20} />
          <p className="text-sm md:text-lg">{hotel.address}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 grid-flow-dense h-[50vh]">
        {imagesArray.slice(0, 6).map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-md
           ${index === 0 ? "lg:row-span-4" : ""}
           ${index === 1 ? "lg:row-span-2" : ""}
           ${index === 2 ? "lg:col-span-2 lg:row-span-2" : ""}
           ${index === 3 ? "lg:row-span-2" : ""}
           ${index === 4 ? "lg:row-span-2" : ""}
           ${index === 5 ? "lg:row-span-2" : ""}
         `}
          >
            <Image
              src={`/${image}`}
              alt="Hotel Image"
              width={40}
              height={40}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-10 py-6">
        <div className="lg:w-2/3 space-y-6 text-gray-600">
          <p className="leading-relaxed text-base md:text-[17px]">
            {hotel.description}
          </p>

          <p className="leading-relaxed text-base md:text-[17px]">
            With 824 well-appointed rooms, the hotel has recently been
            refurbished. Guests can enjoy various recreational activities,
            including a BBQ/picnic area and a playground. Each room is equipped
            with a refrigerator and minibar.
          </p>

          <p className="leading-relaxed text-base md:text-[17px]">
            Murtala Muhammed International Airport is a 50-minute drive from Eko
            Hotels & Suites. The hotel&apos;s multilingual staff ensures every
            guest enjoys a comfortable stay.
          </p>

          <div className="pt-5">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Most Popular Facilities
            </h3>
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-gray-700">
              {facilities.map(({ name, icon }) => (
                <div key={name} className="flex items-center gap-2">
                  {icon}
                  <span>{name}</span>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        <div className="lg:w-1/3 h-[300px] md:h-[350px] bg-gray-100 rounded-xl flex items-center justify-center shadow-lg">
          <button className="w-4/5 md:w-3/4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
            Show On Map
          </button>
        </div>
      </div>

      <TabSection />
      <GuestReviews />
      <GuestPolicies />
      <ImportantInfo />
      {similar.map((hotel) => (
        <SimilarHotels
          key={hotel.id}
          hotel={{
            id: hotel.id,
            name: hotel.name,
            city: hotel.city,
            ["average-rating"]: hotel["average-rating"],
            reviews: hotel.reviews,
            ["price-per-night"]: hotel["price-per-night"],
            images: hotel.images,
          }}
        />
      ))}
    </div>
  );
}

// end
// "use client";
// import Image from "next/image";
// import { useState } from "react";

// type HotelProps = {
//   hotelData: {
//     hotel: {
//       id: string;
//       name: string;
//       city: string;
//       address: string;
//       rating: string;
//       amenities: string;
//       images: string;
//       description: string;
//     };
//     policies: {
//       "check-in": string;
//       "check-out": string;
//       "allow-children": boolean;
//       "allow-pets": boolean;
//       "payments-available": string[];
//     } | null;
//     reviews: { user: string; comment: string; rating: number }[] | null;
//     rooms: {
//       id: string;
//       name: string;
//       type: string;
//       images: string;
//       amenities: string;
//       capacity: number;
//       "allow-smoking": boolean;
//       "room-size": string;
//       "price-per-night": number;
//     }[];

//     similar: {
//       id: string;
//       name: string;
//       city: string;
//       "price-per-night": number;
//       images: string;
//     }[];
//   };
// };

// export default function HotelDetails({ hotelData }: HotelProps) {
//   const { hotel, policies, reviews, rooms, similar } = hotelData;
//   const imagesArray = hotel.images.split(",");

//   const [showGallery, setShowGallery] = useState(false);
//   console.log(hotelData);

//   return (
//     <div className="container mx-auto p-4">
//       {/* Header Section */}
//       <div>
//         <h1 className="text-2xl font-bold">{hotel.name}</h1>
//         <p className="text-gray-500">
//           {hotel.address}, {hotel.city}
//         </p>
//       </div>

//       {/* Image Gallery */}
//       <div className="grid grid-cols-4 gap-2 my-4">
//         {imagesArray.slice(0, 4).map((img, index) => (
//           <div key={index} className="relative">
//             <Image
//               src={img}
//               alt={`Hotel Image ${index + 1}`}
//               width={200}
//               height={150}
//               className="rounded-lg"
//             />
//             {index === 3 && (
//               <div
//                 className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl cursor-pointer"
//                 onClick={() => setShowGallery(true)}
//               >
//                 +{imagesArray.length - 4} photos
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Hotel Details */}
//       <p className="text-gray-600">{hotel.description}</p>
//       <p className="mt-2">
//         <strong>Rating:</strong> ⭐ {hotel.rating}/5
//       </p>
//       <p>
//         <strong>Amenities:</strong> {hotel.amenities}
//       </p>

//       {/* Room Listings */}
//       <div className="mt-8">
//         <h2 className="text-xl font-semibold">Available Rooms</h2>
//         {rooms.map((room) => (
//           <div key={room.id} className="border p-4 rounded-md mt-4">
//             <h3 className="font-semibold">
//               {room.name} - {room.type}
//             </h3>
//             <Image
//               src={room.images}
//               alt={room.name}
//               width={250}
//               height={150}
//               className="rounded-lg my-2"
//             />
//             <p>
//               <strong>Capacity:</strong> {room.capacity} people
//             </p>
//             <p>
//               <strong>Room Size:</strong> {room["room-size"]}
//             </p>
//             <p>
//               <strong>Amenities:</strong> {room.amenities}
//             </p>
//             <p className="text-lg font-bold mt-2">
//               ${room["price-per-night"]} / night
//             </p>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
//               Book Now
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Reviews Section */}
//       <div className="mt-8">
//         <h2 className="text-xl font-semibold">Guest Reviews</h2>
//         {reviews ? (
//           reviews.map((review, index) => (
//             <div key={index} className="border p-3 mt-3 rounded-md">
//               <p className="font-semibold">{review.user}</p>
//               <p className="text-yellow-500">⭐ {review.rating}/5</p>
//               <p className="text-gray-700">{review.comment}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No reviews yet.</p>
//         )}
//       </div>

//       {/* Policies Section */}
//       <div className="mt-8">
//         <h2 className="text-xl font-semibold">Hotel Policies</h2>
//         {policies && typeof policies === "object" && (
//           <div className="mt-6">
//             <h2 className="text-xl font-semibold">Hotel Policies</h2>
//             <ul className="list-disc list-inside text-gray-600">
//               <li>
//                 <strong>Check-in:</strong> {policies["check-in"]}
//               </li>
//               <li>
//                 <strong>Check-out:</strong> {policies["check-out"]}
//               </li>
//               <li>
//                 <strong>Children Allowed:</strong>{" "}
//                 {policies["allow-children"] ? "Yes" : "No"}
//               </li>
//               <li>
//                 <strong>Pets Allowed:</strong>{" "}
//                 {policies["allow-pets"] ? "Yes" : "No"}
//               </li>
//               <li>
//                 <strong>Payments Accepted:</strong>{" "}
//                 {Array.isArray(policies["payments-available"])
//                   ? (policies["payments-available"] as string[]).join(", ")
//                   : "N/A"}
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Similar Hotels Section */}
//       <div className="mt-8">
//         <h2 className="text-xl font-semibold">Similar Hotels</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           {similar.map((hotel) => (
//             <div key={hotel.id} className="border p-3 rounded-lg">
//               <Image
//                 src={hotel.images.split(",")[0]}
//                 alt={hotel.name}
//                 width={200}
//                 height={150}
//                 className="rounded-lg"
//               />
//               <h3 className="font-semibold mt-2">{hotel.name}</h3>
//               <p>{hotel.city}</p>
//               <p className="font-bold">${hotel["price-per-night"]} / night</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Full Image Gallery Modal */}
//       {showGallery && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-wrap justify-center items-center p-4 z-50">
//           <button
//             onClick={() => setShowGallery(false)}
//             className="absolute top-5 right-5 bg-white px-3 py-1 rounded"
//           >
//             Close
//           </button>
//           {imagesArray.map((img, index) => (
//             <Image
//               key={index}
//               src={img}
//               alt={`Gallery Image ${index}`}
//               width={300}
//               height={200}
//               className="m-2 rounded-lg"
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
