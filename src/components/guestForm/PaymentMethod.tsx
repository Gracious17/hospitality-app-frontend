"use client";
import Image from "next/image";
import Credit from "../../../public/creditLogo.png";
import PayPal from "../../../public/Logo Alternative.svg.png";
import React from "react";
type PaymentMethodProps = {
  paymentMethod: string;
  setPaymentMethod: (value: string) => void;
};
const PaymentMethod: React.FC<PaymentMethodProps> = ({
  paymentMethod,
  setPaymentMethod,
}) => {
  return (
    <div className="border rounded-lg p-4 mt-4 bg-white">
      <h2 className="text-lg font-semibold mb-2">Select Payment Method</h2>

      {/* Payment Options */}
      <div className="space-y-3">
        {/* Credit Card Option */}
        <label className="flex items-center p-3 border rounded-lg cursor-pointer bg-gray-100">
          <input
            type="radio"
            name="payment"
            value="credit"
            className="mr-2"
            checked={paymentMethod === "credit"}
            onChange={() => setPaymentMethod("credit")}
          />
          <span className="flex items-center w-full justify-between">
            <p>Credit Card</p>
            <Image
              src={Credit}
              alt="Visa"
              width={60}
              height={30}
              className="ml-2"
            />
          </span>
        </label>
      </div>

      {/* Credit Card Form (Only if selected) */}
      {paymentMethod === "credit" && (
        <div className="mt-4 space-y-2 transition-all duration-300 ease-in-out">
          <p className="text-sm text-gray-500">
            All transactions are secure and encrypted.
          </p>
          <input
            type="text"
            placeholder="Card Number"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Card Holder Name"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Expiring Date"
              className="w-1/2 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-1/2 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
      {/* PayPal Option */}
      <label className="flex items-center p-3 border rounded-lg cursor-pointer ">
        <input
          type="radio"
          name="payment"
          value="paypal"
          className="mr-2"
          checked={paymentMethod === "paypal"}
          onChange={() => setPaymentMethod("paypal")}
        />
        <span className="flex items-center justify-between w-full">
          PayPal
          <Image
            src={PayPal}
            alt="PayPal"
            width={60}
            height={30}
            className="ml-2"
          />
        </span>
      </label>
    </div>
  );
};

export default PaymentMethod;
