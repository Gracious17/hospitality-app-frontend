import React from "react";
import Hero from "@/components/hero/Hero";
import CustomerExpLay from "@/components/customerExp/CustomerExpLay";
import { TrendyHotelCarousel } from "@/components/hotelsInTrendIngArea/TrendyHotelCarousel";
import { BrowsePropertyCards } from "@/components/browseProperty/BrowsePropertyCards";
export default function Home() {
  return (
    <div>
      <h1 className="text-green-500  animate-pulse">Navbar Coming Soon...</h1>
      <Hero />
      <CustomerExpLay />
      <TrendyHotelCarousel />
      <BrowsePropertyCards />
    </div>
  );
}
