"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Flag2 from "../../flags/Flag2";
const currencies = [
  { value: "NGN", flag: <Flag2 /> },
  { value: "USD", flag: "🇺🇸" },
  { label: "Euro", value: "EUR", flag: "🇪🇺" },
];

export default function FlagDropDown() {
  return (
    <div className="border-r-2  ">
      <Select>
        <SelectTrigger className="relative w-[70px] bg-transparent  border-none  outline-none pr-4">
          <SelectValue />
          <span className="absolute right-4 text-xl font-bold">&#9662;</span>
        </SelectTrigger>
        <SelectContent>
          {currencies.map((currency) => (
            <SelectItem key={currency.value} value={currency.value}>
              <span className="flex items-center ">
                <span>{currency.flag}</span> {currency.label}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
