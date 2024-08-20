import { config } from "@/config";
import { fetchData } from "@/utils/server";
import { LoactionInfo } from "./LoactionInfo";

export const Home = async () => {
  const locationData = await fetchData(`${config.BASE_URL}/api/playerIds`);
  if (!locationData) return <div>Loading...</div>;

  return (
    <div className=" border w-full flex justify-center align-middle">
      <LoactionInfo />
    </div>
  );
};
