import Image from "next/image";
import React from "react";
interface GetInspiredCardProps {
  img: string;
  contents: string;
  date: string;
}
const GetInspiredCard = ({ img, contents, date }: GetInspiredCardProps) => {
  return (
    <div className="w-full flex">
      <div className="">
        <Image
          src={img}
          alt="get inspired"
          width={400}
          height={50}
          className="w-full h-48 object-cover rounded-t-lg shadow-lg"
        />
        <div className="text-left ml-2 pr-4">
          <h3 className="text-lg ">{contents}</h3>
          <p className="bottom-0 pt-4 text-xs  text-gray-500">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default GetInspiredCard;
