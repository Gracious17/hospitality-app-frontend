import LocationSearcher from "./LocationSearcher";
import DatePicker from "./DatePicker";
import GuestRoomSelector from "./GuestRoomSelector";

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
      <button className="bg-purple-600 text-white p-2 rounded-md w-full sm:w-auto">
        Search
      </button>
    </div>
  );
}
export default SearchBar;
