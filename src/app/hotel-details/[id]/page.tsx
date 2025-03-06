import HotelDetails from "./HotelDetails";

async function getHotelDetails(id: string) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // ⏳ 10s timeout

    const res = await fetch(
      `https://findpeace.onrender.com/api/v1/hotels/${id}`,
      { signal: controller.signal }
    );

    clearTimeout(timeout);

    if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching hotel details:", error);
    return null; // Return `null` to handle errors in UI
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const hotelData = await getHotelDetails(params.id);

  if (!hotelData) {
    return (
      <p className="text-center text-red-500">
        ⚠️ Hotel details could not be loaded. Please try again later.
      </p>
    );
  }

  return <HotelDetails hotelData={hotelData} />;
}
