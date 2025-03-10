import React from "react";

const reviews = [
  {
    name: "Emeka Jerry",
    country: "Nigeria",
    rating: 8.1,
    title: "Outstanding",
    date: "June 15, 2024",
    review:
      "The hotel is huge and there are many meetings held and the breakfast is great. The environment is also good, the sanitation is also very good, the facilities are very new, and it is also very close to tourist attractions. I will stay here again.",
  },
  {
    name: "Emeka Jerry",
    country: "Nigeria",
    rating: 8.1,
    title: "Outstanding",
    date: "June 15, 2024",
    review:
      "The hotel is huge and there are many meetings held and the breakfast is great. The environment is also good, the sanitation is also very good, the facilities are very new, and it is also very close to tourist attractions. I will stay here again.",
  },
  {
    name: "Emeka Jerry",
    country: "Nigeria",
    rating: 8.1,
    title: "Outstanding",
    date: "June 15, 2024",
    review:
      "The hotel is huge and there are many meetings held and the breakfast is great. The environment is also good, the sanitation is also very good, the facilities are very new, and it is also very close to tourist attractions. I will stay here again.",
  },
];
type Guest = {
  body: string;
  country: string;
  date: string;
  name: string;
  rating: number;
  remark: string;
};

type props = {
  guest: Guest;
};
const GuestReviews: React.FC = () => {
  return (
    <div className="mt-8 space-y-6">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="border-b border-gray-200 pb-4 flex justify-between gap-10"
        >
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Profile Avatar */}
              <div className="w-10 h-10 flex items-center justify-center bg-green-600 text-white font-semibold text-lg rounded-full">
                {review.name.charAt(0)}
              </div>

              {/* Name & Country */}
              <div>
                <h2 className="text-gray-800 font-medium">{review.name}</h2>
                <p className="text-gray-500 text-sm">{review.country}</p>
              </div>
            </div>

            {/* Date */}
          </div>

          <div className="flex flex-col w-3/5">
            {/* Rating & Title */}
            <div className="flex items-center justify-between ">
              <div className="flex items-center justify-between gap-2 mt-2">
                <div className="bg-primary text-white flex items-center justify-center h-8 w-8 text-xs font-bold rounded-full">
                  {review.rating}
                </div>
                <p className="font-semibold text-gray-800">{review.title}</p>
              </div>
              <p className="text-gray-500 text-sm ">{review.date}</p>
            </div>
            {/* Review Text */}
            <p className="text-gray-600 text-sm mt-2">{review.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuestReviews;
