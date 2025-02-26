import Image from "next/image";
import React from "react";
interface props {
  image: string;
  title: string;
  content: string;
}
const FeatureCard = ({ image, title, content }: props) => {
  return (
    <div className="text-center bg-white p-2 rounded-lg hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105">
      <Image
        src={image}
        alt="icon"
        width={70}
        height={70}
        className="m-auto rounded-[100%] "
      />
      <h1 className="text-[20px] mt-[1.4rem] font-[600] text-black font-sans">
        {title}
      </h1>
      <p className="mt-[1rem] text-black opacity-50 text-[15px]">{content}</p>
    </div>
  );
};

export default FeatureCard;
