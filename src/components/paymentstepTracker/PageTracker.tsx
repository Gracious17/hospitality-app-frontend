import React from "react";

const PageTracker = ({ step }: { step: number }) => {
  return (
    <div className="flex justify-center items-center  py-3 shadow-md">
      {/* Step 1 */}
      <div className="flex items-center space-x-2">
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full text-center ${
            step === 1 ? "bg-blue-500 text-white" : "bg-gray-300"
          } `}
        >
          1
        </div>
        <span className="text-black font-semibold"> Enter Details</span>
      </div>
      {/* connector line */}
      <div className="w-12 h-1 bg-gray-300 mx-2"></div>
      {/* Step 2 */}
      <div className="flex items-center space-x-2">
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            step === 2 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          2
        </div>
        <span className="text-black font-semibold">Final Step</span>
      </div>
    </div>
  );
};

export default PageTracker;
