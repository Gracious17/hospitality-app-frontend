import Image from "next/image";
import React from "react";

export default function Flag2() {
  return (
    <>
      <Image
        src="https://flagcdn.com/48x36/ng.png" // Use the highest resolution
        alt="Nigeria Flag"
        width={16}
        height={12}
        sizes="(max-width: 600px) 16px, (max-width: 1200px) 32px, 48px" // Responsive sizes
      />
    </>
  );
}
