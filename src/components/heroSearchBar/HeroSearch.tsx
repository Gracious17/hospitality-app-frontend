import LocationSearcher from "./LocationSearcher";
import DatePicker from "./DatePicker";
import GuestRoomSelector from "./GuestRoomSelector";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="flex flex-wrap gap-2 bg-white p-4 rounded-lg shadow-md">
      <div className="w-full sm:w-1/4">
        <LocationSearcher />
      </div>
      <div className="w-full sm:w-1/4">
        <DatePicker />
      </div>
      <div className="w-full sm:w-1/4">
        <GuestRoomSelector />
      </div>
      <button className="bg-[#5627FF] text-white p-2 rounded-md md:px-8  w-full sm:w-auto">
        <span className="flex text-center items-center">
          <Search size={15} />
          Search
        </span>
      </button>
    </div>
  );
}
export default SearchBar;
