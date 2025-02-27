"use client";

import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

type Room = { adults: number; children: number };

export default function GuestRoomSelector() {
  const [rooms, setRooms] = useState<Room[]>([{ adults: 2, children: 0 }]);

  const addRoom = () => setRooms([...rooms, { adults: 2, children: 0 }]);
  const removeRoom = (index: number) =>
    setRooms(rooms.filter((_, i) => i !== index));

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="w-full border p-2 rounded-md">
          {rooms.length} Room{rooms.length > 1 ? "s" : ""},{" "}
          {rooms.reduce((sum, r) => sum + r.adults + r.children, 0)} Guests
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-4">
        {rooms.map((room, index) => (
          <div key={index} className="mb-2 border-b pb-2">
            <p className="font-semibold">Room {index + 1}</p>
            <div className="flex items-center justify-between mt-2">
              <span>Adults</span>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    room.adults > 1 &&
                    setRooms([
                      ...rooms.slice(0, index),
                      { ...room, adults: room.adults - 1 },
                      ...rooms.slice(index + 1),
                    ])
                  }
                >
                  -
                </Button>
                <span>{room.adults}</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    setRooms([
                      ...rooms.slice(0, index),
                      { ...room, adults: room.adults + 1 },
                      ...rooms.slice(index + 1),
                    ])
                  }
                >
                  +
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span>Children</span>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    room.children > 0 &&
                    setRooms([
                      ...rooms.slice(0, index),
                      { ...room, children: room.children - 1 },
                      ...rooms.slice(index + 1),
                    ])
                  }
                >
                  -
                </Button>
                <span>{room.children}</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    setRooms([
                      ...rooms.slice(0, index),
                      { ...room, children: room.children + 1 },
                      ...rooms.slice(index + 1),
                    ])
                  }
                >
                  +
                </Button>
              </div>
            </div>
            {index > 0 && (
              <button
                className="text-red-500 text-sm mt-2"
                onClick={() => removeRoom(index)}
              >
                Remove Room
              </button>
            )}
          </div>
        ))}
        <button className="text-blue-500 text-sm mt-2" onClick={addRoom}>
          + Add Room
        </button>
      </PopoverContent>
    </Popover>
  );
}
