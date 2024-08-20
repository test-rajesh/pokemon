"use client";
import { useGlobalState } from "@/context";

export function LoactionInfo() {
  const { country } = useGlobalState();
  return (
    <div className="border sm:p-10  p-4 sm:max-w-lg rounded-lg">
      Heressss ssssssssssssssssss ssssssssssssssssssss sssssssssssssssss are the
      POKEMON user from {country}
    </div>
  );
}
