import React from "react";
import GetInspiredCard from "./GetInspiredCard";
const getInspiredData = [
  {
    id: 1,
    date: "12th June, 2021",
    content:
      "An Echanting Spanish Summer Await: Discover the Many Charm of Valencia",
    img: "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    date: "25th March, 2021",
    content:
      "An Echanting Spanish Summer Await: Discover the Many Charm of Valencia",
    img: "https://images.unsplash.com/photo-1517480448885-d5c53555ba8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    date: "25th March, 2021",
    content:
      "An Echanting Spanish Summer Await: Discover the Many Charm of Valencia",
    img: "https://images.unsplash.com/photo-1468546211010-9a842bd2026e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRyZWVzJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D",
  },
];
const GetInspired = () => {
  return (
    <div className="w-full  text-center ">
      <h1 className="text-lg font-semibold  text-center py-4">
        Get Inspiration for your next trip
      </h1>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl mx-auto py-4">
          {getInspiredData.map((data) => (
            <GetInspiredCard
              key={data.id}
              img={data.img}
              contents={data.content}
              date={data.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetInspired;
