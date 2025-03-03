// "use client";

// import * as React from "react";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@radix-ui/react-popover";
// import { format } from "date-fns";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";

// function DatePicker() {
//   const [selected, setSelected] = React.useState<Date | undefined>();

//   return (
//     <Popover>
//       <PopoverTrigger className="p-2 border rounded-md bg-white cursor-pointer">
//         {selected ? format(selected, "PPP") : "Select a date"}
//       </PopoverTrigger>
//       <PopoverContent className="p-4 bg-white rounded-md shadow-lg">
//         <DayPicker mode="single" selected={selected} onSelect={setSelected} />
//       </PopoverContent>
//     </Popover>
//   );
// }
// export default DatePicker;

// "use client";

// import * as React from "react";
// import * as Popover from "@radix-ui/react-popover";
// import { format } from "date-fns";
// import { CalendarIcon } from "lucide-react";
// import { cn } from "@/lib/utils";

// export default function DatePicker() {
//   const [checkIn, setCheckIn] = React.useState<Date | null>(null);
//   const [checkOut, setCheckOut] = React.useState<Date | null>(null);
//   const [openPopover, setOpenPopover] = React.useState(false);

//   return (
//     <div className="flex gap-4">
//       {/* Check-in Date Picker */}
//       <Popover.Root open={openPopover} onOpenChange={setOpenPopover}>
//         <Popover.Trigger asChild>
//           <button className="w-40 flex items-center justify-between border px-4 py-2 rounded-md shadow-sm bg-white">
//             {checkIn ? format(checkIn, "EEE, MMM dd") : "Check-in"}
//             <CalendarIcon className="w-4 h-4 text-gray-500" />
//           </button>
//         </Popover.Trigger>
//         <Popover.Content className="p-4 bg-white border shadow-md rounded-md">
//           <Calendar
//             selected={checkIn}
//             onSelect={(date) => {
//               setCheckIn(date);
//               setOpenPopover(false);
//             }}
//           />
//         </Popover.Content>
//       </Popover.Root>

//       {/* Check-out Date Picker */}
//       <Popover.Root>
//         <Popover.Trigger asChild>
//           <button className="w-40 flex items-center justify-between border px-4 py-2 rounded-md shadow-sm bg-white">
//             {checkOut ? format(checkOut, "EEE, MMM dd") : "Check-out"}
//             <CalendarIcon className="w-4 h-4 text-gray-500" />
//           </button>
//         </Popover.Trigger>
//         <Popover.Content className="p-4 bg-white border shadow-md rounded-md">
//           <Calendar
//             selected={checkOut}
//             onSelect={(date) => setCheckOut(date)}
//           />
//         </Popover.Content>
//       </Popover.Root>
//     </div>
//   );
// }

// function Calendar({
//   selected,
//   onSelect,
// }: {
//   selected: Date | null;
//   onSelect: (date: Date) => void;
// }) {
//   return (
//     <div className="grid grid-cols-7 gap-1 p-2">
//       {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
//         <div key={day} className="text-sm font-semibold text-gray-500">
//           {day}
//         </div>
//       ))}
//       {[...Array(31)].map((_, i) => {
//         const day = i + 1;
//         return (
//           <button
//             key={day}
//             className={cn(
//               "w-8 h-8 rounded-md hover:bg-gray-100",
//               selected?.getDate() === day && "bg-blue-500 text-white"
//             )}
//             onClick={() => onSelect(new Date(2024, 7, day))}
//           >
//             {day}
//           </button>
//         );
//       })}
//     </div>
//   );
// }

"use client";

import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils"; // Utility function for conditional class names

export default function DatePicker() {
  const [checkIn, setCheckIn] = React.useState<Date | null>(null);
  const [checkOut, setCheckOut] = React.useState<Date | null>(null);
  const [openPopover, setOpenPopover] = React.useState(false);

  return (
    <div className="flex flex-col sm:flex-wrap sm:flex-row gap-3 sm:gap-4">
      {/* Check-in Date Picker */}
      <Popover.Root open={openPopover} onOpenChange={setOpenPopover}>
        <Popover.Trigger asChild>
          <button className="w-[50%] sm:w-40 flex items-center justify-between border px-4 py-2 rounded-md shadow-sm bg-white text-sm sm:text-base">
            {checkIn ? format(checkIn, "EEE, MMM dd") : "Check-in"}
            <CalendarIcon className="w-5 h-5 text-gray-500" />
          </button>
        </Popover.Trigger>
        <Popover.Content
          className="p-7 bg-white border shadow-md rounded-md w-[90%] sm:w-[350px] md:w-[400px]"
          sideOffset={5}
          align="start"
        >
          <Calendar
            selected={checkIn}
            onSelect={(date) => {
              setCheckIn(date);
              setOpenPopover(false);
            }}
          />
        </Popover.Content>
      </Popover.Root>

      {/* Check-out Date Picker */}
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="w-full sm:w-40 flex items-center justify-between border px-4 py-2 rounded-md shadow-sm bg-white text-sm sm:text-base">
            {checkOut ? format(checkOut, "EEE, MMM dd") : "Check-out"}
            <CalendarIcon className="w-5 h-5 text-gray-500" />
          </button>
        </Popover.Trigger>
        <Popover.Content
          className="p-4 bg-white border shadow-md rounded-md w-[300px] sm:w-[350px] md:w-[400px]"
          sideOffset={5}
          align="start"
        >
          <Calendar
            selected={checkOut}
            onSelect={(date) => setCheckOut(date)}
          />
        </Popover.Content>
      </Popover.Root>
    </div>
  );
}

function Calendar({
  selected,
  onSelect,
}: {
  selected: Date | null;
  onSelect: (date: Date) => void;
}) {
  return (
    <div className="grid grid-cols-7 gap-1 p-2 text-xs sm:text-sm">
      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
        <div key={day} className="text-gray-500 font-medium text-center">
          {day}
        </div>
      ))}
      {[...Array(31)].map((_, i) => {
        const day = i + 1;
        return (
          <button
            key={day}
            className={cn(
              "w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md hover:bg-gray-100",

              selected?.getDate() === day && "bg-blue-500 text-white"
            )}
            onClick={() => onSelect(new Date(2024, 7, day))}
          >
            {day}
          </button>
        );
      })}
    </div>
  );
}
