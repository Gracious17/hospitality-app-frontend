import React from "react";
import Hero from "@/components/hero/Hero";
import CustomerExpLay from "@/components/customerExp/CustomerExpLay";
import { TrendyHotelCarousel } from "@/components/hotelsInTrendIngArea/TrendyHotelCarousel";
import { BrowsePropertyCards } from "@/components/browseProperty/BrowsePropertyCards";
import { PopularHotels } from "@/components/popularHotels/PopularHotels";
import GetInspired from "@/components/getInspired/GetInspired";
import TrendDestination from "@/components/hotelFlightList/TrendDestination";
import FlightToPopularArea from "@/components/hotelFlightList/FlightToPopularArea";
// import SearchBar from "@/components/heroSearchBar/HeroSearch";
export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* <h1 className="text-green-500  animate-pulse">Navbar Coming Soon...</h1> */}
      <Hero />
      {/* <SearchBar /> */}
      <CustomerExpLay />
      <PopularHotels />
      <TrendyHotelCarousel />
      <BrowsePropertyCards />
      <GetInspired />
      <TrendDestination />
      <FlightToPopularArea />
    </div>
  );
}
