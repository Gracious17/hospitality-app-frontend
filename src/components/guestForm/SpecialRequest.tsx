"use client";
import { MinusCircle, PlusCircle } from "lucide-react";
import React, { useState } from "react";
type SpecialRequestProps = {
  specialRequests: string;
  setSpecialRequests: (value: string) => void;
};
const SpecialRequest: React.FC<SpecialRequestProps> = ({
  specialRequests,
  setSpecialRequests,
}) => {
  const [showRequests, setShowRequests] = useState(false);

  return (
    <div className="border rounded-lg p-4 mt-4 bg-white">
      {/* Toggle Button */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setShowRequests(!showRequests)}
      >
        <h2 className="text-lg font-semibold">Special Requests</h2>
        <button className="text-xs text-blue-500 flex items-center">
          {showRequests ? "Select/Enter" : "Hide"}
          {showRequests ? <PlusCircle /> : <MinusCircle />}
        </button>
      </div>

      {showRequests && (
        <div className="mt-2 transition-all duration-300 ease-in-out">
          <p className="text-sm text-gray-500">
            The property will do its best, but can&apos;t guarantee to fulfill
            all requests.
          </p>
          <textarea
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter any special requests here (Optional)"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default SpecialRequest;
