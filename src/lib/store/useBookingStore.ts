import { create } from "zustand";
import { Hotel } from "@/types/types";
interface BookingState {
  selectedHotel: Hotel | null;
  userDetails: { email: string; name: string; phone: string };
  setHotel: (hotel: Hotel) => void;
  setUserDetails: (details: {
    email: string;
    name: string;
    phone: string;
  }) => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  selectedHotel: null,
  userDetails: { email: "", name: "", phone: "" },
  setHotel: (hotel) => set({ selectedHotel: hotel }),
  setUserDetails: (details) => set({ userDetails: details }),
}));
// interface Hotels {
//   id: string;
//   name: string;
//   location: string;
//   price: number;
//   image: string;
// }

// interface Hotel {
//   id: string;
//   name: string;
//   location: string;
//   price: number;
//   rating: number;
//   image: string;
// }

// interface HotelStore {
//   state: string;
//   hotels: Hotel[];
//   isLoading: boolean;
//   error: string | null;
//   setState: (state: string) => void;
//   fetchHotels: () => Promise<void>;
// }

// const API_URL = "https://findpeace.onrender.com/api/v1/hotels/search";

// export const useHotelStore = create<HotelStore>((set, get) => ({
//   state: "",
//   hotels: [],
//   isLoading: false,
//   error: null,

//   setState: (state) => set({ state }),

//   fetchHotels: async () => {
//     const { state } = get();
//     if (!state) return;

//     set({ isLoading: true, error: null });

//     try {
//       const response = await fetch(`${API_URL}?state=${state}`);
//       if (!response.ok) throw new Error("Failed to fetch hotels");

//       const data: Hotel[] = await response.json();
//       set({ hotels: data, isLoading: false });
//     } catch (err) {
//       set({ error: (err as Error).message, isLoading: false });
//     }
//   },
// }));

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
