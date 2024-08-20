"use client";

import { fetchLocation } from "@/utils/client";
import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

const GlobalStateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {
  const [country, setCountry] = useState("");

  useEffect(() => {
    location();
  }, []);

  const location = async () => {
    let con = await fetchLocation(Cookies);
    setCountry(con);
  };

  const contextValue = { country };

  return (
    <GlobalStateContext.Provider value={contextValue}>
      {children}
    </GlobalStateContext.Provider>
  );
};
