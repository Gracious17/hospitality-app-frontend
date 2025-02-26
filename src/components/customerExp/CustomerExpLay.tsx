import React from "react";
// import SectionHeading from "../sectionHeading/SectionHeading";
import FeatureCard from "@/components/customerExp/FeatureCard";
import CusIcon from "../../../public/image 35.png";

const CustomerExpLay = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* <SectionHeading
        headingMini="Ideal Soluiton For You"
        headingPrimary="Explore Ultimate Features"
      /> */}
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]">
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <FeatureCard
            title="Seamless Booking Experience"
            image={CusIcon.src}
            content="Our easy-to-use platform guarantees a smooth and secure booking  process."
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <FeatureCard
            title="Secure & Simple Payments"
            image={CusIcon.src}
            content="Easily manage bookings with secure payments, personalized options, and instant updates."
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <FeatureCard
            title="Customer Support"
            image={CusIcon.src}
            content="Assistance with bookings, payments, and questions—always here to help."
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerExpLay;
