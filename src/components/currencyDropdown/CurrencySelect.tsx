"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Flag2 from "../flags/Flag2";
const currencies = [
  { label: "Naira", value: "NGN", flag: <Flag2 /> },
  { label: "Dollar", value: "USD", flag: "🇺🇸" },
  { label: "Euro", value: "EUR", flag: "🇪🇺" },
];

export default function CurrencySelect() {
  return (
    <Select>
      <SelectTrigger className="w-[200px] bg-white border-none text-black ">
        <SelectValue placeholder="Select Currency" />
      </SelectTrigger>
      <SelectContent>
        {currencies.map((currency) => (
          <SelectItem key={currency.value} value={currency.value}>
            <span className="flex items-center gap-2">
              <span>{currency.flag}</span> {currency.label}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
