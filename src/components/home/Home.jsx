import { config } from "@/config";
import { LoactionInfo } from "./LoactionInfo";
import { fetchData } from "@/utils/server";

export const Home = async () => {
  const locationData = await fetchData(`${config.BASE_URL}/api/playerIds`);
  if (!locationData) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100 dark:bg-gray-900 p-4">
      <LoactionInfo />
    </div>
  );
};
