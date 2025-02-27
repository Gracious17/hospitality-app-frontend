"use client";

import { useState } from "react";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const locations = [
  "Ogun, Nigeria",
  "Lagos, Nigeria",
  "Abuja, Nigeria",
  "Kano, Nigeria",
];

export default function LocationSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");

  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="w-full border p-2 rounded-md text-left">
          {selected || "Where to?"}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-2">
        <Command>
          <CommandInput
            value={query}
            onValueChange={setQuery}
            placeholder="Search locations..."
          />
          <CommandList>
            {filteredLocations.map((location) => (
              <CommandItem
                key={location}
                onSelect={() => {
                  setSelected(location);
                  setOpen(false);
                }}
              >
                {location}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
