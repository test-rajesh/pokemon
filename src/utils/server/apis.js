import { cookies } from "next/headers";
import { baseURL, urls } from "./urls";

export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export const getInitialTheme = () => {
  if (typeof window === "undefined") {
    const themeCookie = cookies().get("theme")?.value;
    return themeCookie || "light";
  }
};

export const getCountries = async () => {
  try {
    const countries = await fetchData(`${urls.baseURL}${urls.countries}`);
  } catch (err) {
    console.log(err, "error while fetching countries!!");
  }
};
