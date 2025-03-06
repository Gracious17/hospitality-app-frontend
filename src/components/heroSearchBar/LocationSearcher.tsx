// "use client";

// import { useState } from "react";
// import {
//   Command,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { MapPin } from "lucide-react";

// const locations = [
//   "Ogun, Nigeria",
//   "Lagos, Nigeria",
//   "Abuja, Nigeria",
//   "Kano, Nigeria",
// ];

// export default function LocationSearch() {
//   const [open, setOpen] = useState(false);
//   const [query, setQuery] = useState("");
//   const [selected, setSelected] = useState("");

//   const filteredLocations = locations.filter((location) =>
//     location.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <button className="w-full border p-2 rounded-md text-left">
//           {selected || "Where to?"}
//         </button>
//       </PopoverTrigger>
//       <PopoverContent className="w-full p-2 z-[200]">
//         <Command>
//           <CommandInput
//             value={query}
//             onValueChange={setQuery}
//             placeholder="Search locations..."
//           />
//           <CommandList>
//             {filteredLocations.map((location) => (
//               <CommandItem
//                 key={location}
//                 onSelect={() => {
//                   setSelected(location);
//                   setOpen(false);
//                 }}
//               >
//                 <div className="flex group">
//                   <span className="bg-[#E6E7E6] text-2xl p-3 rounded-sm group-hover:shadow-none shadow-md mr-2 group-hover:text-[#5627FF]">
//                     <MapPin className="" />
//                   </span>
//                   <span>{location}</span>
//                 </div>
//               </CommandItem>
//             ))}
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// }
"use client";

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
import { MapPin } from "lucide-react";
import { useState } from "react";

const locations = ["Ogun", "Lagos", "Abuja", "Kano", "Edo"];

export default function LocationSearch({
  state,
  setState,
}: {
  state: string;
  setState: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="w-full border p-2 rounded-md text-left">
          {state || "Where to?"}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-2 z-[200]">
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
                  setState(location); // Update selected state
                  setOpen(false);
                }}
              >
                <div className="flex group">
                  <span className="bg-[#E6E7E6] text-2xl p-3 rounded-sm group-hover:shadow-none shadow-md mr-2 group-hover:text-[#5627FF]">
                    <MapPin className="" />
                  </span>
                  <span>{location}</span>
                </div>
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
