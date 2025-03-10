"use client";

import { useEffect, useState } from "react";
import { useHotelDetailStore } from "@/lib/store/useBookingStore";
import HotelDetails from "@/app/hotel-details/[id]/HotelDetails";

async function getHotelDetails(id: string) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(
      `https://findpeace.onrender.com/api/v1/hotels/${id}`,
      { signal: controller.signal }
    );

    clearTimeout(timeout);

    if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching hotel details:", error);
    return null;
  }
}

export default function HotelPage({ hotelId }: { hotelId: string }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { setHotelData, setPolicies, setReviews, setRooms, setSimilarHotels } =
    useHotelDetailStore();

  useEffect(() => {
    async function fetchHotel() {
      setLoading(true);
      setError("");

      const hotelData = await getHotelDetails(hotelId);
      if (!hotelData) {
        setError("⚠️ Hotel details could not be loaded. Please try again.");
        setLoading(false);
        return;
      }

      // ✅ Store Data in Zustand
      setHotelData(hotelData.hotel);
      setPolicies(hotelData.policies);
      setReviews(hotelData.reviews);
      setRooms(hotelData.rooms);
      setSimilarHotels(hotelData.similar);

      setLoading(false);
    }

    fetchHotel();
  }, [
    hotelId,
    setHotelData,
    setPolicies,
    setReviews,
    setRooms,
    setSimilarHotels,
  ]);

  if (loading)
    return (
      <p className="text-center text-gray-500">Loading hotel details...</p>
    );
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return <HotelDetails />;
}
