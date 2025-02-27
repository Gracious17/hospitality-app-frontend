"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  { label: "NGN", value: "en" },
  { label: "CFA", value: "fr" },
];

export default function NgnDropDown() {
  return (
    <div className="border-r-2 ">
      <Select>
        <SelectTrigger className="relative w-[80px] bg-transparent  border-none  outline-none pr-4">
          <SelectValue />
          <span className="absolute right-4 text-xl font-bold">&#9662;</span>
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.value} value={lang.label}>
              <span className="flex items-center ">{lang.label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
