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
