export type HotelType = {
  id: string;
  name: string;
  location: string;
  price: number;
  bed: string;
  distance: string;
  image: string;
  amenities: string[];
  concellation: string;
  description: string;
  tax: number;
  roomType: string;
  rating: number;
  free: string;
  // Add other properties
};

export interface Hotel {
  id: string;
  name: string;
  propertyType: string;
  city: string;
  state: string;
  address: string;
  rating: number;
  averageRating: number;
  amenities: string[];
  pricePerNight: number;
  images: string[];
  reviews: number;
}

// Hotel details  types
export type HotelDetail = {
  id: string;
  name: string;
  city: string;
  address: string;
  rating: string;
  amenities: string;
  images: string;
  description: string;
};

export type Policies = {
  "check-in": string;
  "check-out": string;
  "allow-children": boolean;
  "allow-pets": boolean;
  "payments-available": string[];
} | null;

export type Review = {
  user: string;
  comment: string;
  rating: number;
};

export type Room = {
  id: string;
  name: string;
  type: string;
  images: string;
  amenities: string;
  capacity: number;
  "allow-smoking": boolean;
  "room-size": string;
  "price-per-night": number;
};

export type SimilarHotel = {
  id: string;
  name: string;
  city: string;
  "price-per-night": number;
  images: string;
};
