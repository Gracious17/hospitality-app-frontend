"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import GetInspiredCard from "./GetInspiredCard";
import dets from "../../../public/dets2.jpg";

type Blog = {
  Id: string;
  Title: string;
  DisplayImage: string;
  CreatedAt: string;
};

const fetchBlogs = async (): Promise<Blog[]> => {
  const response = await axios.get(
    "https://findpeace.onrender.com/api/v1/hotels/index"
  );
  return response.data.data.blogs;
};

const GetInspired: React.FC = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    staleTime: 60000,
  });

  return (
    <section className="w-full text-center py-12 bg-gray-50">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 animate-fade-up">
          ✈️ Get Inspired for Your Next Trip
        </h1>
        <p className="text-gray-600 mt-2 text-lg animate-fade-up delay-150">
          Discover breathtaking destinations and unique travel experiences
        </p>
      </div>

      {isLoading && (
        <p className="text-center text-gray-500 text-lg animate-pulse">
          Loading inspiration...
        </p>
      )}
      {error && (
        <p className="text-center text-red-500 text-lg font-medium">
          ⚠️ Oops! Failed to load inspiration.
        </p>
      )}

      {!isLoading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {blogs.map((blog, index) => (
            <GetInspiredCard
              key={blog.Id}
              img={dets}
              contents={blog.Title}
              date={new Date(blog.CreatedAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              className="animate-fade-up delay-200 "
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default GetInspired;
