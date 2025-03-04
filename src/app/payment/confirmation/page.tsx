import PageTracker from "@/components/paymentstepTracker/PageTracker";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTracker step={2} />
      <h1>Payment Confirmation</h1>
    </div>
  );
};

export default page;
