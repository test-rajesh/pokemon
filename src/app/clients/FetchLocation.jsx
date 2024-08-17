"use client";
import { useEffect } from "react";
import Cookies from "js-cookie";

const deviceIP = async () => {
  let ipResponse = await fetch("https://api.ipify.org?format=json");
  if (!(await ipResponse.json().ip)) {
    ipResponse = await fetch("https://api64.ipify.org?format=json");
  }
  const { ip } = await ipResponse.json();
  return ip;
};

const fetchLocation = async () => {
  try {
    const country = Cookies.get("country");
    if (!country) {
      const ip = await deviceIP();
      const response = await fetch(`http://ip-api.com/json/${ip}`);
      const data = await response.json();
      const { country } = data;
      Cookies.set("country", country);
    }
  } catch (error) {
    console.log("Error fetching location:", error);
  }
};

const Locationcom = ({ children }) => {
  useEffect(() => {
    fetchLocation();
  }, []);

  return <>{children}</>;
};

export default Locationcom;
