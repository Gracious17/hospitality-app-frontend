import React from "react";

const ImportantInfo = () => {
  return (
    <div className="py-8">
      <h1 className="text-xl font-semibold mb-6">Important Information</h1>

      {/* Table-like structured section */}
      <div className="w-fullrounded-lg overflow-hidden">
        {/* General Notice */}
        <div className="grid grid-cols-2 ">
          <p className="font-semibold">You Need to Know</p>
          <div className=" space-y-2">
            <p>
              Each person&pos;s charges may apply and vary depending on property
              policy.
            </p>
            <p>
              Government-issued photo identification and a credit card, debit
              card, or cash deposit may be required at check-in for incidental
              purposes.
            </p>
            <p>
              Special requests are subject to availability upon check-in and may
              incur additional charges; special requests cannot be guaranteed.
            </p>
            <p>
              Guests must contact this property in advance to reserve
              rollaway/extra beds. This property accepts credit cards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantInfo;
