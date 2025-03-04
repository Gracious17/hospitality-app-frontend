"use client";

import { useRouter } from "next/navigation"; // Next.js router for navigation
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { generateId } from "@/lib/generateId";
import { HotelType } from "@/types/types";

type FinalStepProps = {
  guests: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }[];
  hotel: HotelType;
  paymentMethod: string;
  specialRequests: string;
};

const FinalStep: React.FC<FinalStepProps> = ({
  guests,
  hotel,
  paymentMethod,
  specialRequests,
}) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    console.log("seleted hotel", hotel);
    console.log("payment method", paymentMethod);
    console.log("special request", specialRequests);
    console.log("guests", guests);
  }, [guests, hotel, paymentMethod, specialRequests]);
  const handleProceed = async () => {
    const customerId = generateId();
    const userEmail = guests[0]?.email;
    // Ensure required fields are filled before proceeding
    if (!guests || guests.length === 0) {
      alert("Please fill in all required details before proceeding.");
      return;
    }

    setIsSubmitting(true);

    // Simulate a short delay before navigating (for UX)
    setTimeout(() => {
      router.push(`/confirmation?email=${userEmail}&id=${customerId}`); // Navigate to confirmation page
    }, 1000);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-4 flex flex-col items-center">
      <p className="text-sm text-gray-600 mb-2">
        By submitting this booking, I acknowledge that I have read and agree to
        the
        <span className="text-blue-600 underline cursor-pointer">
          Terms of Use
        </span>
        and
        <span className="text-blue-600 underline cursor-pointer">
          Privacy Statement
        </span>
        .
      </p>

      <Button
        onClick={handleProceed}
        disabled={isSubmitting}
        className="bg-indigo-600 hover:bg-indigo-700 text-white w-full md:w-auto px-6 py-2 rounded-lg"
      >
        {isSubmitting ? "Processing..." : "Final Step"}
      </Button>
    </div>
  );
};

export default FinalStep;
