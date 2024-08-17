import { fetchData } from "@/utils/api";

export const Home = async () => {
  const locationData = await fetchData("http://localhost:3000/api/playerIds");

  if (!locationData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Location Data</h1>
      <pre>{JSON.stringify(locationData, null, 2)}</pre>
    </div>
  );
};
