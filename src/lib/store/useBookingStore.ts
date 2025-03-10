import { create } from "zustand";
import { Hotel } from "@/types/types";

// const API_URL = "https://findpeace.onrender.com/api/v1/hotels/search";

interface HotelStore {
  hotels: Hotel[];
  loading: boolean;
  error: string | null;
  fetchHotels: (state: string) => Promise<void>;
}

export const useHotelStore = create<HotelStore>((set) => ({
  hotels: [],
  loading: false,
  error: null,

  fetchHotels: async (state: string) => {
    set({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://findpeace.onrender.com/api/v1/hotels/search?state=${state}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch hotels");
      }

      const data = await response.json();

      if (!data.hotels || !Array.isArray(data.hotels)) {
        throw new Error("Invalid data,Check other locations");
      }
      // Convert API response to match our state
      const hotels: Hotel[] = data.hotels.map((hotel) => ({
        id: hotel.id,
        name: hotel.name,
        propertyType: hotel["property-type"],
        city: hotel.city,
        state: hotel.state,
        address: hotel.address,
        rating: Number(hotel.rating),
        averageRating: hotel["average-rating"],
        amenities: hotel.amenities ? hotel.amenities.split(", ") : [],
        // amenities: hotel.amenities.split(", "),
        pricePerNight: hotel["price-per-night"],
        // images: hotel.images.split(","),
        images: hotel.images ? hotel.images.split(",") : [],
        reviews: hotel.reviews || 0,
      }));
      set({ hotels, loading: false });
    } catch (error) {
      set({ hotels: [], error: (error as Error).message, loading: false });
    }
  },
}));

// Hotel details store

import {
  HotelDetail,
  Policies,
  Review,
  Room,
  SimilarHotel,
} from "@/types/types";

interface HotelDetailStore {
  hotel: HotelDetail | null;
  policies: Policies;
  reviews: Review;
  rooms: Room[];
  similarHotels: SimilarHotel[];
  setHotelData: (hotel: HotelDetail) => void;
  setPolicies: (policies: Policies) => void;
  setReviews: (review: Review) => void;
  setRooms: (rooms: Room[]) => void;
  setSimilarHotels: (similarHotels: SimilarHotel[]) => void;
}

export const useHotelDetailStore = create<HotelDetailStore>((set) => ({
  hotel: null,
  policies: null,
  reviews: null,
  rooms: [],
  similarHotels: [],
  setHotelData: (hotel) => set({ hotel }),
  setPolicies: (policies) => set({ policies }),
  setReviews: (reviews) => set({ reviews }),
  setRooms: (rooms) => set({ rooms }),
  setSimilarHotels: (similarHotels) => set({ similarHotels }),
}));
