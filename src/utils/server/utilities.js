import { cookies } from "next/headers";

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
