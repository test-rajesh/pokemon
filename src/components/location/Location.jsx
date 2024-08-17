"use client";
import { useState } from "react";

export default function LocationForm() {
  const [location, setLocation] = useState({
    city: "",
    state: "",
    country: "",
  });

  const [geoError, setGeoError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocation({
      ...location,
      [name]: value,
    });
  };

  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          )
            .then((res) => res.json())
            .then((data) => {
              setLocation({
                city: data.city || "",
                state: data.principalSubdivision || "",
                country: data.countryName || "",
              });
              console.log(data);
            })
            .catch(() => setGeoError("Unable to fetch location details."));
        },
        () => setGeoError("Geolocation is not supported by this browser.")
      );
    } else {
      setGeoError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Share Your Location</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">City</label>
        <input
          type="text"
          name="city"
          value={location.city}
          onChange={handleInputChange}
          className="input input-bordered w-full"
          placeholder="Enter your city"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">State</label>
        <input
          type="text"
          name="state"
          value={location.state}
          onChange={handleInputChange}
          className="input input-bordered w-full"
          placeholder="Enter your state"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Country</label>
        <input
          type="text"
          name="country"
          value={location.country}
          onChange={handleInputChange}
          className="input input-bordered w-full"
          placeholder="Enter your country"
        />
      </div>

      <button onClick={handleGetLocation} className="btn btn-primary w-full">
        Use Current Location
      </button>

      {geoError && <div className="text-red-500 mt-4">{geoError}</div>}
    </div>
  );
}

{
  /* <a
  href={`https://www.wikidata.org/wiki/${location.wikidataId}`}
  target="_blank"
  rel="noopener noreferrer"
>
  Learn more about {location.city} on Wikidata
</a>; */
}
