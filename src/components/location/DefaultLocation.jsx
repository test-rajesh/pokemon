"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const Redirector = () => {
  const router = useRouter();
  useEffect(() => {
    let con = fetchLocation(Cookies);
    con && router.push(`/${con}`);
  }, []);

  return <></>;
};
