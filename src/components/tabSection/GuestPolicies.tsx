import React from "react";
import { CreditCard } from "lucide-react";

const GuestPolicies = () => {
  return (
    <div className="py-8">
      <h1 className="text-xl font-semibold mb-6">Guest Policies</h1>

      <div className="w-full  rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 py-4">
          <p className="font-semibold">Check-in & Check-out Times</p>
          <div className=" space-y-2">
            <p>Check-in: From 14:00 to 00:00</p>
            <p>Check-out: Until 12:00</p>
          </div>
        </div>

        <div className="grid grid-cols-2 py-4">
          <p className="font-semibold">Child Policies</p>
          <div className="space-y-2">
            <p>Children of any age are welcome.</p>
            <p>
              Children 3 years and above will be charged as adults at this
              property. Add the number of children and their ages to get
              accurate pricing.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 py-4">
          <p className="font-semibold">Cribs & Extra Beds</p>
          <p className="">
            Extra beds can be added, but cribs are not available. Fees for extra
            beds are not included in the total price. Contact the hotel for
            details.
          </p>
        </div>

        <div className="grid grid-cols-2 py-4">
          <p className=" font-semibold">Pets</p>
          <p className="">Pets are not allowed.</p>
        </div>

        <div className="grid grid-cols-2 py-4">
          <p className=" font-semibold">Age Requirements</p>
          <p className="">The main guest must be at least 18 years old.</p>
        </div>

        <div className="grid grid-cols-2 items-center py-4">
          <p className="font-semibold">Paying at the Hotel</p>
          <div className=" flex items-center space-x-2">
            <CreditCard className="w-5 h-5 text-gray-600" />
            <p>Various payment methods accepted.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestPolicies;
