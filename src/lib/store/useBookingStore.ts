import { create } from "zustand";

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
interface Hotel {
  id: string;
  name: string;
  location: string;
  price: number;
  image: string;
}
