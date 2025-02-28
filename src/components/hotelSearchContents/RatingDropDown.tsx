"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const ratings = [5, 4, 3, 2, 1];

export default function RatingDropDown() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {selectedRating ? `⭐ ${selectedRating}` : "Star"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-8 p-2 items-center justify-center">
        <div className="flex space-x-2 items-center justify-center">
          {ratings.map((rating) => (
            <DropdownMenuItem
              key={rating}
              onSelect={() => setSelectedRating(rating)}
              className="ml-5 cursor-pointer flex items-center justify-center px-2 py-1 rounded-md hover:bg-gray-100"
            >
              <span className="text-black ml-5">⭐ {rating}</span>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
