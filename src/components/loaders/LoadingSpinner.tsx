import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="text-center justify-center items-center w-full mx-auto">
      <div className="relative flex items-center justify-center w-30 h-30 bg-[#FFF] rounded-full shadow-lg mx-auto">
        {/* Circular Dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-black rounded-full shadow-md"
            style={{
              transform: `rotate(${i * 30}deg) translateY(-60px)`,
              animation: `pulseUp 1.2s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          ></div>
        ))}
        {/* Loading Text */}
        <div className="absolute text-black font-semibold tracking-wide text-sm">
          LOADING...
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
