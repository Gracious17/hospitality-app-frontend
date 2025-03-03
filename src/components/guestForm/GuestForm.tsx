import { PlusCircle, Trash } from "lucide-react";

interface Guest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode?: string;
}

interface GuestInfoProps {
  guests: Guest[];
  setGuests: React.Dispatch<React.SetStateAction<Guest[]>>;
}

const GuestInfo: React.FC<GuestInfoProps> = ({ guests, setGuests }) => {
  const addGuest = () => {
    setGuests([
      ...guests,
      {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        countryCode: "+234",
      },
    ]);
  };

  const removeGuest = (index: number) => {
    setGuests(guests.filter((_, i) => i !== index));
  };

  const updateGuest = (index: number, field: keyof Guest, value: string) => {
    const updatedGuests = [...guests];
    updatedGuests[index][field] = value;
    setGuests(updatedGuests);
  };

  return (
    <div className="bg-white shadow-sm p-5 rounded-lg border border-gray-200 w-full my-2 ml-2">
      <h2 className="text-lg font-semibold">Guest Info</h2>
      <p className="text-sm text-gray-500 mb-4">
        Guest names must match the valid ID which will be used at check-in.
      </p>
      <div className="flex justify-end">
        <button
          className="text-black flex items-center mt-4"
          onClick={addGuest}
        >
          <PlusCircle size={20} className="mr-1 text-blue-500" />
          Add New Guest (Optional)
        </button>
      </div>

      {guests.map((guest, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-md font-medium">Guest {index + 1}</h3>
          <div className="flex gap-4 mt-2">
            <input
              type="text"
              placeholder="Enter First Name"
              className="border p-2 rounded w-full"
              value={guest.firstName}
              onChange={(e) => updateGuest(index, "firstName", e.target.value)}
            />
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Enter Last Name"
                className="border p-2 rounded w-full"
                value={guest.lastName}
                onChange={(e) => updateGuest(index, "lastName", e.target.value)}
              />
              {index > 0 && (
                <button
                  className="absolute right-2 top-2 text-red-500 text-xs"
                  onClick={() => removeGuest(index)}
                >
                  g
                  <Trash size={20} />
                </button>
              )}
            </div>
          </div>

          <div className="flex gap-4 mt-2">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="border p-2 rounded w-full"
              value={guest.email || ""}
              onChange={(e) => updateGuest(index, "email", e.target.value)}
            />
            <div className="flex border rounded p-2 w-full">
              <select
                aria-label="Select country code"
                className="bg-transparent text-gray-500 outline-none"
                value={guest.countryCode || "+234"}
                onChange={(e) =>
                  updateGuest(index, "countryCode", e.target.value)
                }
              >
                <option value="+234">+234</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="ml-2 outline-none w-full"
                value={guest.phone || ""}
                onChange={(e) => updateGuest(index, "phone", e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuestInfo;
