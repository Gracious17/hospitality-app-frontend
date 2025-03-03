"use client";
import GuestInfoForm from "@/components/guestForm/GuestForm";
import PaymentMethod from "@/components/guestForm/PaymentMethod";
import SpecialRequest from "@/components/guestForm/SpecialRequest";
import PageTracker from "@/components/paymentstepTracker/PageTracker";
import { BedDouble, Check } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import FinalStep from "@/components/guestForm/FinalStep";
import { HotelType } from "@/types/types";

const detailsData: HotelType[] = [
  {
    id: "1",
    free: "hwhhdhdh",
    name: "Best Western Orlando Gateway Hotel",
    bed: "2 Queen bed",
    distance: "11.5km to city center",
    image:
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww",
    amenities: ["🚭 No Smoking", "🅿 Parking", "🏊‍♂️ Swimming Pool"],
    tax: 25.0,
    location: "New York City, NY",
    roomType: "King Suite",
    price: 220,
    rating: 4.5,
    description:
      "Experience luxury and comfort with our premium suites and top-tier services in the heart of NYC.",
    concellation: "Free Cancellation before 16:00, Jul 31",
  },
  {
    id: "2",
    rating: 4.5,
    name: "Best Western Orlando Gateway Hotel",
    bed: "2 Queen bed",
    distance: "11.5km to city center",
    image:
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww",
    amenities: ["🚭 No Smoking", "🅿 Parking", "🏊‍♂️ Swimming Pool"],
    tax: 25.0,
    location: "New York City, NY",
    roomType: "King Suite",
    price: 220,
    description:
      "Experience luxury and comfort with our premium suites and top-tier services in the heart of NYC.",
    concellation: "Free Cancellation before 16:00, Jul 31",
    free: "hwhhdhdh",
  },
];

const Page = () => {
  const params = useParams();
  const hotelId = params?.id as string; // Ensure it's a string
  console.log("Hotel ID from params:", hotelId);

  const hotel = detailsData.find((h) => h.id === hotelId);

  // Form States
  const [guests, setGuests] = useState([
    { firstName: "", lastName: "", email: "", phone: "" },
  ]);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [specialRequests, setSpecialRequests] = useState("");

  if (!hotel) {
    return (
      <div className="text-center text-red-500 text-lg">Hotel not found</div>
    );
  }

  return (
    <>
      <PageTracker step={1} />
      <div className="flex flex-col md:flex-row gap-4 mx-auto justify-center bg-gray-300 pt-8">
        {/* Left container */}
        <div className="sm:w-2/3 w-[90%] mx-auto shadow-md">
          <div className="space-y-2 bg-white rounded-lg shadow p-4">
            {/* Display only the selected hotel */}

            {hotel && (
              <div className="flex flex-col md:flex-row gap-4">
                <Image
                  src={hotel.image}
                  alt="hotel"
                  width={300}
                  height={100}
                  className="w-full md:w-40 h-20 object-cover rounded-lg"
                />
                <div className="flex-1 space-y-1">
                  <h3 className="font-semibold">{hotel.name}</h3>
                  <div className="flex gap-2">
                    <BedDouble />
                    <p className="text-sm font-semibold">{hotel.bed}</p>
                  </div>
                  <p className="text-xs text-gray-500">{hotel.distance}</p>
                  <div className="flex gap-2 text-xs">
                    {hotel.amenities.map((amenity) => (
                      <span key={amenity}>{amenity}</span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Check className="text-green-500" size={20} />
                    <span className="text-xs text-gray-400">
                      {hotel.concellation}
                    </span>
                  </div>
                </div>
                <div>{hotel.free}</div>
              </div>
            )}
            {/* Guest Info section */}
            <GuestInfoForm guests={guests} setGuests={setGuests} />

            {/* Special Request section */}
            <SpecialRequest
              specialRequests={specialRequests}
              setSpecialRequests={setSpecialRequests}
            />

            {/* Payment Section */}
            <PaymentMethod
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />

            {/* Final Step */}
            <FinalStep
              guests={guests}
              hotel={hotel}
              paymentMethod={paymentMethod}
              specialRequests={specialRequests}
            />
          </div>
        </div>

        {/* Right container */}
        <div className="w-1/3 md:flex md:flex-col bg-gray-100 p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold">Booking Summary</h2>
          <p className="text-sm">Price: ${hotel.price} per night</p>
          <p className="text-sm">Taxes & Fees: ${hotel.tax}</p>
          <p className="text-sm font-semibold">
            Total: ${hotel.price + hotel.tax}
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
