// import HotelListing from "@/components/hotelSearchContents/HotelListing";
// import React from "react";

// const page = () => {
//   return (
//     <div className="">
//       <HotelListing />
//       <h1>Hotel Search</h1>
//     </div>
//   );
// };

// export default page;
"use client";

import HotelListing from "@/components/hotelSearchContents/HotelListing";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("state") || "";
  const minPrice = Number(searchParams.get("minPrice")) || 0;
  const maxPrice = Number(searchParams.get("maxPrice")) || Infinity;
  const rating = Number(searchParams.get("rating")) || 0;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Hotel Search</h1>
      <HotelListing
        location={location}
        minPrice={minPrice}
        maxPrice={maxPrice}
        rating={rating}
      />
    </div>
  );
};

export default Page;
