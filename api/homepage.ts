// lib/api.ts
import axios from "axios";

const API_URL = "https://findpeace.onrender.com/api/v1/hotels/index"; // Replace with actual API

export type Blog = {
  Id: string;
  Title: string;
  DisplayImage: string;
  CreatedAt: string;
};

export type Hotel = {
  id: string;
  name: string;
  city: string;
  rating: string;
  price_per_night: number;
  images: string;
  reviews?: number;
};

export type PropertyType = {
  Name: string;
  Image: string;
};

export type Destination = {
  City: string;
  Hotels: number;
};

export type HomepageData = {
  blogs: Blog[];
  popular_hotels: Hotel[];
  property_types: PropertyType[];
  trending_destinations: Destination[];
};

export const fetchHomepageData = async (): Promise<HomepageData> => {
  const response = await axios.get(API_URL);
  return response.data.data; // Extract 'data' property
};
