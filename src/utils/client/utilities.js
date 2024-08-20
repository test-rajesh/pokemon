

const deviceIP = async () => {
  let ipResponse = await fetch("https://api.ipify.org?format=json");
  if (!(await ipResponse.json().ip)) {
    ipResponse = await fetch("https://api64.ipify.org?format=json");
  }
  const { ip } = await ipResponse.json();
  return ip;
};

export const fetchLocation = async (Cookies) => {
  try {
    let country = Cookies.get("country");
    if (!country) {
      const ip = await deviceIP();
      const response = await fetch(`http://ip-api.com/json/${ip}`);
      const data = await response.json();
      country = data?.country;
      Cookies.set("country", country);
    }
    return country;
  } catch (error) {
    console.log("Error fetching location:", error);
  }
};
